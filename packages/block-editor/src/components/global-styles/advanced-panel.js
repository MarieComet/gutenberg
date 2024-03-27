/**
 * WordPress dependencies
 */
import { Notice, __experimentalVStack as VStack } from '@wordpress/components';
import { useState, useEffect, useRef } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { default as transformStyles } from '../../utils/transform-styles';

const EDITOR_ID =
	'block-editor-global-styles-advanced-panel__custom-css-editor';

export default function AdvancedPanel( {
	value,
	onChange,
	inheritedValue = value,
} ) {
	// Custom CSS
	const [ cssError, setCSSError ] = useState( null );
	const customCSS = inheritedValue?.css;
	function handleOnChange( newValue ) {
		onChange( {
			...value,
			css: newValue,
		} );
		if ( cssError ) {
			const [ transformed ] = transformStyles(
				[ { css: newValue } ],
				'.editor-styles-wrapper'
			);
			if ( transformed ) {
				setCSSError( null );
			}
		}
	}
	function handleOnBlur( newValue ) {
		if ( ! newValue ) {
			setCSSError( null );
			return;
		}
		const [ transformed ] = transformStyles(
			[ { css: newValue } ],
			'.editor-styles-wrapper'
		);
		setCSSError(
			transformed === null
				? __( 'There is an error with your CSS structure.' )
				: null
		);
	}

	/**
	 * Ensure the editor has at least min lines of code,
	 * as the editor will shrink to fit the content.
	 * @param {string} content The content to ensure min lines for.
	 * @return {string} The content with at least min lines.
	 */
	function ensureMinLines( content ) {
		const MIN_LINES = 10;
		const LINE_HEIGHT = 18.2; // Height of one line in the editor
		const MARGIN = 53.4;
		let requiredLines = MIN_LINES;

		const lines = content.split( '\n' );
		const contentLineCount = lines.length;

		const wrapper = document.querySelector(
			'.edit-site-global-styles-screen-css'
		);
		if ( wrapper ) {
			const wrapperHeight = wrapper.offsetHeight;
			const editorHeight = wrapperHeight - MARGIN;

			// Calculate the minimum number of lines that should be displayed
			const calcMinLineCount = Math.ceil( editorHeight / LINE_HEIGHT );
			requiredLines = Math.max( MIN_LINES, calcMinLineCount );

			// Set the max height of the editor allowing scrolling by `overflow-y: scroll`
			const editor = document.getElementById( EDITOR_ID );
			if ( editor ) {
				editor.style.height = `${ editorHeight }px`;
			}
		}

		let result = content;
		for ( let i = contentLineCount; i < requiredLines; i++ ) {
			result += '\n';
		}

		return result;
	}
	const editorRef = useRef();
	useEffect( () => {
		( async () => {
			/**
			 * Lazy load CodeMirror by using Webpack's dynamic import.
			 * This should be replaced with native dynamic import once it's supported.
			 * @see https://github.com/WordPress/gutenberg/pull/60155
			 */
			const { EditorView, basicSetup } = await import( 'codemirror' );
			const {indentWithTab} = await import('@codemirror/commands');
			const {keymap} = await import('@codemirror/view');
			const { css } = await import( '@codemirror/lang-css' );

			if ( editorRef.current ) {
				new EditorView( {
					doc: ensureMinLines( customCSS ),
					extensions: [
						basicSetup,
						css(),
						keymap.of([indentWithTab]),
						EditorView.updateListener.of( ( editor ) => {
							if ( editor.docChanged ) {
								handleOnChange( editor.state.doc.toString() );
							}
						} ),
						EditorView.focusChangeEffect.of(
							( editorState, focusing ) => {
								if ( ! focusing ) {
									handleOnBlur( editorState.doc.toString() );
								}
							}
						),
					],
					parent: editorRef.current,
				} );
			}
		} )();
		// We only want to run this once, so we can ignore the dependency array.
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [] );

	return (
		<VStack spacing={ 3 }>
			{ cssError && (
				<Notice status="error" onRemove={ () => setCSSError( null ) }>
					{ cssError }
				</Notice>
			) }
			<label
				htmlFor={ EDITOR_ID }
				className="block-editor-global-styles-advanced-panel__custom-css-label"
			>
				{ __( 'Additional CSS' ) }
			</label>
			<div ref={ editorRef } id={ cssEditorId }></div>
		</VStack>
	);
}

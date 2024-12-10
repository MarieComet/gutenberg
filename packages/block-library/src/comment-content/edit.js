/**
 * External dependencies
 */
import clsx from 'clsx';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RawHTML } from '@wordpress/element';
import { Disabled } from '@wordpress/components';
import { useEntityProp } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import {
	AlignmentControl,
	BlockControls,
	store as blockEditorStore,
	useBlockProps,
} from '@wordpress/block-editor';

/**
 * Renders the `core/comment-content` block on the editor.
 *
 * @param {Object} props                      React props.
 * @param {Object} props.setAttributes        Callback for updating block attributes.
 * @param {Object} props.attributes           Block attributes.
 * @param {string} props.attributes.textAlign The `textAlign` attribute.
 * @param {Object} props.context              Inherited context.
 * @param {string} props.context.commentId    The comment ID.
 * @param {string} props.clientId             The block client ID.
 *
 * @return {JSX.Element} React element.
 */
export default function Edit( {
	setAttributes,
	attributes: { textAlign },
	context: { commentId },
	clientId,
} ) {
	const blockProps = useBlockProps( {
		className: clsx( {
			[ `has-text-align-${ textAlign }` ]: textAlign,
		} ),
	} );
	const [ content ] = useEntityProp(
		'root',
		'comment',
		'content',
		commentId
	);
	const isFirstCommentContentBlockInBlockTemplate = useSelect(
		( select ) =>
			select( blockEditorStore ).getBlockParentsByBlockName(
				clientId,
				'core/comment-template'
			).length > 0
	);

	const blockControls = (
		<BlockControls group="block">
			<AlignmentControl
				value={ textAlign }
				onChange={ ( newAlign ) =>
					setAttributes( { textAlign: newAlign } )
				}
			/>
		</BlockControls>
	);

	if ( ! commentId || ! content ) {
		return (
			<>
				{ blockControls }
				<div { ...blockProps }>
					<p>
						{ isFirstCommentContentBlockInBlockTemplate
							? __(
									'This is the Comment Content block. It displays the text of user comments submitted on your site, ranging from short remarks to longer, multi-paragraph responses.'
							  )
							: __( 'This is another Comment Content block.' ) }
					</p>
				</div>
			</>
		);
	}

	return (
		<>
			{ blockControls }
			<div { ...blockProps }>
				<Disabled>
					<RawHTML key="html">{ content.rendered }</RawHTML>
				</Disabled>
			</div>
		</>
	);
}

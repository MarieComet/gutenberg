/**
 * WordPress dependencies
 */
import { useEntityBlockEditor } from '@wordpress/core-data';
import {
	useInnerBlocksProps,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { useDispatch, useSelect } from '@wordpress/data';
import { useMemo, useState, useRef } from '@wordpress/element';
import { Icon, plus } from '@wordpress/icons';
import { Button } from '@wordpress/components';
import { createBlock } from '@wordpress/blocks';
/**
 * Internal dependencies
 */
import PlaceholderPreview from './placeholder/placeholder-preview';
import { PRIORITIZED_INSERTER_BLOCKS } from '../constants';
import { LinkUI } from '../../navigation-link/link-ui';
import { updateAttributes } from '../../navigation-link/update-attributes';

function NavigationLinkAppender( { rootClientId } ) {
	const { insertBlock } = useDispatch( blockEditorStore );
	const [ isLinkOpen, setIsLinkOpen ] = useState( false );
	const [ popoverAnchor, setPopoverAnchor ] = useState( null );
	const linkUIref = useRef();

	const createNewLink = ( attributes ) => {
		const block = createBlock( 'core/navigation-link', attributes );

		insertBlock( block, undefined, rootClientId );
	};

	return (
		<>
			<Button
				__next40pxDefaultSize
				ref={ setPopoverAnchor }
				className="block-editor-button-block-appender"
				onClick={ () => setIsLinkOpen( ( state ) => ! state ) }
				aria-haspopup
				aria-expanded={ isLinkOpen }
				label="Add block"
				showTooltip
			>
				<Icon icon={ plus } />
			</Button>
			{ isLinkOpen && (
				<LinkUI
					ref={ linkUIref }
					clientId={ rootClientId }
					link={ {
						url: undefined,
						label: undefined,
						id: undefined,
						kind: undefined,
						type: undefined,
						opensInNewTab: false,
					} }
					onClose={ () => {
						setIsLinkOpen( false );
					} }
					onChange={ ( updatedValue ) => {
						updateAttributes( updatedValue, createNewLink );
					} }
					anchor={ popoverAnchor }
				/>
			) }
		</>
	);
}

export default function NavigationInnerBlocks( {
	clientId,
	hasCustomPlaceholder,
	orientation,
	templateLock,
} ) {
	const {
		isImmediateParentOfSelectedBlock,
		selectedBlockHasChildren,
		isSelected,
	} = useSelect(
		( select ) => {
			const {
				getBlockCount,
				hasSelectedInnerBlock,
				getSelectedBlockClientId,
			} = select( blockEditorStore );
			const selectedBlockId = getSelectedBlockClientId();

			return {
				isImmediateParentOfSelectedBlock: hasSelectedInnerBlock(
					clientId,
					false
				),
				selectedBlockHasChildren: !! getBlockCount( selectedBlockId ),

				// This prop is already available but computing it here ensures it's
				// fresh compared to isImmediateParentOfSelectedBlock.
				isSelected: selectedBlockId === clientId,
			};
		},
		[ clientId ]
	);

	const [ blocks, onInput, onChange ] = useEntityBlockEditor(
		'postType',
		'wp_navigation'
	);

	// When the block is selected itself or has a top level item selected that
	// doesn't itself have children, show the standard appender. Else show no
	// appender.
	const parentOrChildHasSelection =
		isSelected ||
		( isImmediateParentOfSelectedBlock && ! selectedBlockHasChildren );

	const placeholder = useMemo( () => <PlaceholderPreview />, [] );

	const hasMenuItems = !! blocks?.length;

	// If there is a `ref` attribute pointing to a `wp_navigation` but
	// that menu has no **items** (i.e. empty) then show a placeholder.
	// The block must also be selected else the placeholder will display
	// alongside the appender.
	const showPlaceholder =
		! hasCustomPlaceholder && ! hasMenuItems && ! isSelected;

	const innerBlocksProps = useInnerBlocksProps(
		{
			className: 'wp-block-navigation__container',
		},
		{
			value: blocks,
			onInput,
			onChange,
			prioritizedInserterBlocks: PRIORITIZED_INSERTER_BLOCKS,
			directInsert: true,
			orientation,
			templateLock,

			// As an exception to other blocks which feature nesting, show
			// the block appender even when a child block is selected.
			// This should be a temporary fix, to be replaced by improvements to
			// the sibling inserter.
			// See https://github.com/WordPress/gutenberg/issues/37572.
			renderAppender:
				isSelected ||
				( isImmediateParentOfSelectedBlock &&
					! selectedBlockHasChildren ) ||
				// Show the appender while dragging to allow inserting element between item and the appender.
				parentOrChildHasSelection
					? NavigationLinkAppender
					: false,
			placeholder: showPlaceholder ? placeholder : undefined,
			__experimentalCaptureToolbars: true,
			__unstableDisableLayoutClassNames: true,
		}
	);

	return (
		<>
			<div { ...innerBlocksProps } />
		</>
	);
}

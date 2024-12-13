/**
 * External dependencies
 */
import clsx from 'clsx';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	AlignmentControl,
	BlockControls,
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';
import { createBlock, getDefaultBlockName } from '@wordpress/blocks';
import { Platform } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { Figure } from './figure';
import { BlockQuote } from './blockquote';

const isWebPlatform = Platform.OS === 'web';

function PullQuoteEdit( {
	attributes,
	setAttributes,
	isSelected,
	insertBlocksAfter,
} ) {
	const { textAlign, citation } = attributes;
	const blockProps = useBlockProps( {
		className: clsx( {
			[ `has-text-align-${ textAlign }` ]: textAlign,
		} ),
	} );
	const shouldShowCitation = ! RichText.isEmpty( citation ) || isSelected;

	return (
		<>
			<BlockControls group="block">
				<AlignmentControl
					value={ textAlign }
					onChange={ ( nextAlign ) => {
						setAttributes( { textAlign: nextAlign } );
					} }
				/>
			</BlockControls>
			<Figure { ...blockProps }>
				<BlockQuote>
					<RichText
						attributeKey="value"
						tagName="p"
						aria-label={ __( 'Pullquote text' ) }
						placeholder={
							// translators: placeholder text used for the quote
							__( 'Add quote' )
						}
						textAlign="center"
					/>
					{ shouldShowCitation && (
						<RichText
							tagName={ isWebPlatform ? 'cite' : undefined }
							attributeKey="citation"
							style={ { display: 'block' } }
							aria-label={ __( 'Pullquote citation text' ) }
							placeholder={
								// translators: placeholder text used for the citation
								__( 'Add citation' )
							}
							className="wp-block-pullquote__citation"
							__unstableMobileNoFocusOnMount
							textAlign="center"
							__unstableOnSplitAtEnd={ () =>
								insertBlocksAfter(
									createBlock( getDefaultBlockName() )
								)
							}
						/>
					) }
				</BlockQuote>
			</Figure>
		</>
	);
}

export default PullQuoteEdit;

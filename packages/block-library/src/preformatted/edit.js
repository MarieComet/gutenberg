/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { createBlock, getDefaultBlockName } from '@wordpress/blocks';

export default function PreformattedEdit( {
	mergeBlocks,
	onRemove,
	insertBlocksAfter,
	style,
} ) {
	const blockProps = useBlockProps( { style } );

	return (
		<RichText
			tagName="pre"
			attributeKey="content"
			preserveWhiteSpace
			onRemove={ onRemove }
			aria-label={ __( 'Preformatted text' ) }
			placeholder={ __( 'Write preformatted text…' ) }
			onMerge={ mergeBlocks }
			{ ...blockProps }
			__unstablePastePlainText
			__unstableOnSplitAtDoubleLineEnd={ () =>
				insertBlocksAfter( createBlock( getDefaultBlockName() ) )
			}
		/>
	);
}

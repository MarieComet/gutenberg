/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { createBlock, getDefaultBlockName } from '@wordpress/blocks';

export default function CodeEdit( {
	onRemove,
	insertBlocksAfter,
	mergeBlocks,
} ) {
	const blockProps = useBlockProps();
	return (
		<pre { ...blockProps }>
			<RichText
				tagName="code"
				attributeKey="content"
				onRemove={ onRemove }
				onMerge={ mergeBlocks }
				placeholder={ __( 'Write code…' ) }
				aria-label={ __( 'Code' ) }
				preserveWhiteSpace
				__unstablePastePlainText
				__unstableOnSplitAtDoubleLineEnd={ () =>
					insertBlocksAfter( createBlock( getDefaultBlockName() ) )
				}
			/>
		</pre>
	);
}

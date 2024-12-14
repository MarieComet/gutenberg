/**
 * WordPress dependencies
 */
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { BlockAlignmentToolbar } from '../';

/**
 * The `BlockAlignmentToolbar` component is used to render block alignment options in the editor. The different alignment options it provides are `left`, `center`, `right`, `wide` and `full`.
 */
const meta = {
	title: 'BlockEditor/BlockAlignmentToolbar',
	component: BlockAlignmentToolbar,
	parameters: {
		docs: { canvas: { sourceState: 'shown' } },
	},
	argTypes: {
		value: {
			control: { type: null },
			description: 'The current value of the alignment setting.',
		},
		onChange: {
			action: 'onChange',
			control: { type: null },
			description:
				"A callback function invoked when the toolbar's alignment value is changed via an interaction with any of the toolbar's buttons. Called with the new alignment value (ie:`left`, `center`, `right`, `wide`, and `full`) as the only argument.",
		},
		controls: {
			control: { type: null },
			description: 'An array of available alignment controls.',
		},
		isCollapsed: {
			control: { type: null },
			description: 'Whether the toolbar should be collapsed.',
		},
	},
};

export default meta;

export const Default = {
	render: function Template( { onChange, ...args } ) {
		const [ value, setValue ] = useState();
		return (
			<BlockAlignmentToolbar
				{ ...args }
				onChange={ ( ...changeArgs ) => {
					onChange( ...changeArgs );
					setValue( ...changeArgs );
				} }
				value={ value }
			/>
		);
	},
};

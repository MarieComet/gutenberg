/**
 * WordPress dependencies
 */
import { createBlock } from '@wordpress/blocks';
import { registerCoreBlocks } from '@wordpress/block-library';

/**
 * Internal dependencies
 */
import Breadcrumb from '../';
import { ExperimentalBlockEditorProvider } from '../../provider';

// For the purpose of this story, we need to register the core blocks samples.
registerCoreBlocks();
const blocks = [
	// vertical
	createBlock( 'core/group', {}, [
		createBlock( 'core/paragraph' ),
		createBlock( 'core/paragraph' ),
		createBlock( 'core/paragraph' ),
	] ),
];

const selection = {
	selectionEnd: {
		clientId: blocks[ 0 ].innerBlocks[ 0 ].clientId,
	},
	selectionStart: {
		clientId: blocks[ 0 ].innerBlocks[ 0 ].clientId,
	},
};

const meta = {
	title: 'BlockEditor/Breadcrumb',
	component: Breadcrumb,
	argTypes: {
		rootLabelText: {
			control: 'text',
			defaultValue: 'Document',
			description:
				'Translated label for the root element of the breadcrumb trail',
		},
	},
	decorators: [
		( Story ) => (
			<ExperimentalBlockEditorProvider
				value={ blocks }
				selection={ selection }
			>
				<Story />
			</ExperimentalBlockEditorProvider>
		),
	],
};
export default meta;

export const Default = {
	render: function Template( { onChange, ...args } ) {
		return <Breadcrumb { ...args } />;
	},
};

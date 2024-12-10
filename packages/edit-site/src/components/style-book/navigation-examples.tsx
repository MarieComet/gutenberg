/**
 * WordPress dependencies
 */
import { createBlock } from '@wordpress/blocks';
import { __experimentalGrid as Grid } from '@wordpress/components';
import { View } from '@wordpress/primitives';
import {
	BlockList,
	privateApis as blockEditorPrivateApis,
} from '@wordpress/block-editor';
import { __, _x } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { unlock } from '../../lock-unlock';

const { ExperimentalBlockEditorProvider, useGlobalStyle } = unlock(
	blockEditorPrivateApis
);

const NAVIGATION_STATES = [
	{
		key: 'default',
		title: __( 'Navigation Item' ),
	},
	{
		key: ':active',
		title: __( 'Navigation Item (Active)' ),
	},
	{
		key: ':any-link',
		title: __( 'Navigation Item (Any Link)' ),
	},
	{
		key: ':focus',
		title: __( 'Navigation Item (Focus)' ),
	},
	{
		key: ':hover',
		title: __( 'Navigation Item (Hover)' ),
	},
	{
		key: ':link',
		title: __( 'Navigation Item (Link)' ),
	},
	{
		key: ':visited',
		title: __( 'Navigation Item (Visited)' ),
	},
];

function NavigationExamples() {
	const [ elementsLink ] = useGlobalStyle( 'elements.link' );

	const navigationBlock = createBlock( 'core/navigation', {}, [
		createBlock( 'core/navigation-link', {
			label: _x( 'About', 'navigation link preview example' ),
			url: 'https://example.com',
		} ),
		createBlock( 'core/navigation-link', {
			label: _x( 'Contact', 'navigation link preview example' ),
			url: 'https://example.com',
		} ),
		createBlock( 'core/navigation-link', {
			label: _x( 'Blog', 'navigation link preview example' ),
			url: 'https://example.com',
		} ),
	] );

	const blocks = [
		...NAVIGATION_STATES.map( ( { key } ) => {
			const styles =
				key === 'default'
					? elementsLink || {}
					: {
							...elementsLink,
							...( elementsLink[ key ] || {} ),
					  };

			return createBlock(
				'core/navigation',
				{
					style: styles,
				},
				[
					createBlock( 'core/navigation-link', {
						label: _x( 'About', 'navigation link preview example' ),
						url: 'https://example.com',
					} ),
				]
			);
		} ),
	];

	return (
		<View className="edit-site-style-book__navigation-examples">
			<Grid columns={ 2 } gap={ 6 }>
				<View className="edit-site-style-book__example">
					<ExperimentalBlockEditorProvider
						value={ [ navigationBlock ] }
					>
						<BlockList appender={ false } />
					</ExperimentalBlockEditorProvider>
				</View>

				{ blocks.map( ( block, index ) => (
					<View
						className="edit-site-style-book__example"
						key={ `navigation-example-${ NAVIGATION_STATES[ index ].key }` }
					>
						<span className="edit-site-style-book__example-title">
							{ NAVIGATION_STATES[ index ].title }
						</span>
						<ExperimentalBlockEditorProvider value={ [ block ] }>
							<BlockList appender={ false } />
						</ExperimentalBlockEditorProvider>
					</View>
				) ) }
			</Grid>
		</View>
	);
}

export default NavigationExamples;

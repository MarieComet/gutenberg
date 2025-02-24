/**
 * WordPress dependencies
 */
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import { Notice } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import Editor from '../editor';
import SidebarNavigationScreenTemplatesBrowse from '../sidebar-navigation-screen-templates-browse';
import PageTemplates from '../page-templates';

const ContentComponent = () => {
	const isBlockBasedTheme = useSelect(
		( select ) => select( coreStore ).getCurrentTheme()?.is_block_theme,
		[]
	);

	return isBlockBasedTheme ? (
		<PageTemplates />
	) : (
		<Notice status="warning" isDismissible={ false }>
			{ __(
				'The theme you are currently using is not compatible with the Site Editor.'
			) }
		</Notice>
	);
};

export const templatesRoute = {
	name: 'templates',
	path: '/template',
	areas: {
		sidebar: <SidebarNavigationScreenTemplatesBrowse backPath="/" />,
		content: <ContentComponent />,
		preview( { query } ) {
			const isListView = query.layout === 'list';
			return isListView ? <Editor /> : undefined;
		},
		mobile: <ContentComponent />,
	},
	widths: {
		content( { query } ) {
			const isListView = query.layout === 'list';
			return isListView ? 380 : undefined;
		},
	},
};

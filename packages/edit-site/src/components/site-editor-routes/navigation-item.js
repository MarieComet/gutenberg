/**
 * WordPress dependencies
 */
import { privateApis as routerPrivateApis } from '@wordpress/router';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import { Notice } from '@wordpress/components';

/**
 * Internal dependencies
 */
import Editor from '../editor';
import SidebarNavigationScreenNavigationMenu from '../sidebar-navigation-screen-navigation-menu';
import { unlock } from '../../lock-unlock';

const { useLocation } = unlock( routerPrivateApis );

const PreviewComponent = () => {
	const isBlockBasedTheme = useSelect(
		( select ) => select( coreStore ).getCurrentTheme()?.is_block_theme,
		[]
	);

	return isBlockBasedTheme ? (
		<Editor />
	) : (
		<Notice status="warning" isDismissible={ false }>
			{ __(
				'The theme you are currently using is not compatible with the Site Editor.'
			) }
		</Notice>
	);
};

function MobileNavigationItemView() {
	const { query = {} } = useLocation();
	const { canvas = 'view' } = query;

	return canvas === 'edit' ? (
		<PreviewComponent />
	) : (
		<SidebarNavigationScreenNavigationMenu backPath="/navigation" />
	);
}

export const navigationItemRoute = {
	name: 'navigation-item',
	path: '/wp_navigation/:postId',
	areas: {
		sidebar: (
			<SidebarNavigationScreenNavigationMenu backPath="/navigation" />
		),
		preview: <PreviewComponent />,
		mobile: <MobileNavigationItemView />,
	},
};

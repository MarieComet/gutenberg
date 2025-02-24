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
import SidebarNavigationScreen from '../sidebar-navigation-screen';
import DataViewsSidebarContent from '../sidebar-dataviews';
import PostList from '../post-list';
import { unlock } from '../../lock-unlock';
import { PostEdit } from '../post-edit';

const { useLocation } = unlock( routerPrivateApis );

const useIsBlockBasedTheme = () =>
	useSelect(
		( select ) => select( coreStore ).getCurrentTheme()?.is_block_theme,
		[]
	);

const ContentComponent = () => {
	const isBlockBasedTheme = useIsBlockBasedTheme();

	return isBlockBasedTheme ? (
		<PostList postType="page" />
	) : (
		<Notice status="warning" isDismissible={ false }>
			{ __(
				'The theme you are currently using is not compatible with the Site Editor.'
			) }
		</Notice>
	);
};

const PreviewComponent = ( { query } ) => {
	const isBlockBasedTheme = useIsBlockBasedTheme();
	const isListView =
		( query.layout === 'list' || ! query.layout ) &&
		query.isCustom !== 'true';

	return isListView && isBlockBasedTheme ? <Editor /> : null;
};

function MobilePagesView() {
	const { query = {} } = useLocation();
	const { canvas = 'view' } = query;

	return canvas === 'edit' ? <Editor /> : <ContentComponent />;
}

export const pagesRoute = {
	name: 'pages',
	path: '/page',
	areas: {
		sidebar: (
			<SidebarNavigationScreen
				title={ __( 'Pages' ) }
				backPath="/"
				content={ <DataViewsSidebarContent postType="page" /> }
			/>
		),
		content: <ContentComponent />,
		preview( { query } ) {
			return <PreviewComponent query={ query } />;
		},
		mobile: <MobilePagesView />,
		edit( { query } ) {
			const hasQuickEdit =
				( query.layout ?? 'list' ) !== 'list' && !! query.quickEdit;
			return hasQuickEdit ? (
				<PostEdit postType="page" postId={ query.postId } />
			) : undefined;
		},
	},
	widths: {
		content( { query } ) {
			const isListView =
				( query.layout === 'list' || ! query.layout ) &&
				query.isCustom !== 'true';
			return isListView ? 380 : undefined;
		},
		edit( { query } ) {
			const hasQuickEdit =
				( query.layout ?? 'list' ) !== 'list' && !! query.quickEdit;
			return hasQuickEdit ? 380 : undefined;
		},
	},
};

/**
 * WordPress dependencies
 */
import { __experimentalItemGroup as ItemGroup } from '@wordpress/components';
import { privateApis as routerPrivateApis } from '@wordpress/router';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';

/**
 * Internal dependencies
 */
import { useDefaultViews } from './default-views';
import { unlock } from '../../lock-unlock';
import DataViewItem from './dataview-item';
import CustomDataViewsList from './custom-dataviews-list';

const { useLocation } = unlock( routerPrivateApis );

export default function DataViewsSidebarContent( { postType } ) {
	const {
		query: { activeView = 'all', isCustom = 'false' },
	} = useLocation();
	const defaultViews = useDefaultViews( { postType } );

	const isBlockBasedTheme = useSelect(
		( select ) => select( coreStore ).getCurrentTheme()?.is_block_theme,
		[]
	);

	if ( ! postType || ( ! isBlockBasedTheme && postType === 'page' ) ) {
		return null;
	}

	const isCustomBoolean = isCustom === 'true';

	return (
		<>
			<ItemGroup className="edit-site-sidebar-dataviews">
				{ defaultViews.map( ( dataview ) => {
					return (
						<DataViewItem
							key={ dataview.slug }
							slug={ dataview.slug }
							title={ dataview.title }
							icon={ dataview.icon }
							type={ dataview.view.type }
							isActive={
								! isCustomBoolean &&
								dataview.slug === activeView
							}
							isCustom={ false }
						/>
					);
				} ) }
			</ItemGroup>
			{ window?.__experimentalCustomViews && (
				<CustomDataViewsList
					activeView={ activeView }
					type={ postType }
					isCustom
				/>
			) }
		</>
	);
}

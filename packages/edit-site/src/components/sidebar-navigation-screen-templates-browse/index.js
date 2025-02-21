/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';

/**
 * Internal dependencies
 */
import SidebarNavigationScreen from '../sidebar-navigation-screen';
import DataviewsTemplatesSidebarContent from './content';

export default function SidebarNavigationScreenTemplatesBrowse( { backPath } ) {
	const isBlockBasedTheme = useSelect(
		( select ) => select( coreStore ).getCurrentTheme()?.is_block_theme,
		[]
	);
	return (
		<SidebarNavigationScreen
			title={ __( 'Templates' ) }
			description={
				isBlockBasedTheme &&
				__(
					'Create new templates, or reset any customizations made to the templates supplied by your theme.'
				)
			}
			backPath={ backPath }
			content={
				isBlockBasedTheme && <DataviewsTemplatesSidebarContent />
			}
		/>
	);
}

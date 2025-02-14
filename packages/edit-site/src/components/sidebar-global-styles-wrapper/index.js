/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useMemo, useState } from '@wordpress/element';
import { privateApis as routerPrivateApis } from '@wordpress/router';
import { useViewportMatch } from '@wordpress/compose';
import { Button } from '@wordpress/components';
import { addQueryArgs, removeQueryArgs } from '@wordpress/url';
import { seen } from '@wordpress/icons';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';

/**
 * Internal dependencies
 */
import GlobalStylesUI from '../global-styles/ui';
import Page from '../page';
import { unlock } from '../../lock-unlock';

const { useLocation, useHistory } = unlock( routerPrivateApis );

const GlobalStylesPageActions = ( {
	isStyleBookOpened,
	setIsStyleBookOpened,
	path,
} ) => {
	const history = useHistory();
	return (
		<Button
			isPressed={ isStyleBookOpened }
			icon={ seen }
			label={ __( 'Style Book' ) }
			onClick={ () => {
				setIsStyleBookOpened( ! isStyleBookOpened );
				const updatedPath = ! isStyleBookOpened
					? addQueryArgs( path, { preview: 'stylebook' } )
					: removeQueryArgs( path, 'preview' );
				// Navigate to the updated path.
				history.navigate( updatedPath );
			} }
			size="compact"
		/>
	);
};

/**
 * Hook to deal with navigation and location state.
 *
 * @return {Array}  The current section and a function to update it.
 */
export const useSection = () => {
	const { path, query } = useLocation();
	const history = useHistory();
	return useMemo( () => {
		return [
			query.section ?? '/',
			( updatedSection ) => {
				history.navigate(
					addQueryArgs( path, {
						section: updatedSection,
					} )
				);
			},
		];
	}, [ path, query.section, history ] );
};

export default function GlobalStylesUIWrapper() {
	const { path } = useLocation();

	const [ isStyleBookOpened, setIsStyleBookOpened ] = useState(
		path.includes( 'preview=stylebook' )
	);
	const isMobileViewport = useViewportMatch( 'medium', '<' );
	const [ section, onChangeSection ] = useSection();

	const isBlockBasedTheme = useSelect(
		( select ) => select( coreStore ).getCurrentTheme()?.is_block_theme,
		[]
	);

	if ( ! isBlockBasedTheme ) {
		return (
			<p className="edit-site-layout__area__unsupported">
				{ __(
					'The theme you are currently using is not compatible with the Site Editor.'
				) }
			</p>
		);
	}

	return (
		<>
			<Page
				actions={
					! isMobileViewport ? (
						<GlobalStylesPageActions
							isStyleBookOpened={ isStyleBookOpened }
							setIsStyleBookOpened={ setIsStyleBookOpened }
							path={ path }
						/>
					) : null
				}
				className="edit-site-styles"
				title={ __( 'Styles' ) }
			>
				<GlobalStylesUI
					path={ section }
					onPathChange={ onChangeSection }
				/>
			</Page>
		</>
	);
}

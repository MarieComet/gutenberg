/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import { addQueryArgs } from '@wordpress/url';
export default function SitePreview() {
	const siteUrl = useSelect( ( select ) => {
		const { getEntityRecord } = select( coreStore );
		const siteData = getEntityRecord( 'root', '__unstableBase' );
		return siteData?.home;
	}, [] );

	// If theme is block based, return the Editor, otherwise return the site preview.
	return (
		<iframe
			src={ addQueryArgs( siteUrl, {
				wp_site_preview: 1,
			} ) }
			title={ __( 'Site Preview' ) }
			style={ {
				display: 'block',
				width: '100%',
				height: '100%',
				backgroundColor: '#fff',
			} }
			onLoad={ ( event ) => {
				// Make interactive elements unclickable.
				const document = event.target.contentDocument;
				const interactiveElements = document.querySelectorAll(
					'a, button, input, details, audio'
				);
				interactiveElements.forEach( ( element ) => {
					element.style.pointerEvents = 'none';
					element.tabIndex = -1;
					element.setAttribute( 'aria-hidden', 'true' );
				} );
			} }
		/>
	);
}

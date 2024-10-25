/**
 * WordPress dependencies
 */
import { useSelect, useDispatch } from '@wordpress/data';
import { useEffect, useRef } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { store as blockEditorStore } from '../store';
import { unlock } from '../lock-unlock';

/**
 * A hook used to set the editor mode to zoomed out mode, invoking the hook sets the mode.
 *
 * @param {boolean} zoomOut If we should enter into zoomOut mode or not
 */
export function useZoomOut( zoomOut = true ) {
	const { setZoomLevel, resetZoomLevel } = unlock(
		useDispatch( blockEditorStore )
	);
	const { isZoomOut } = unlock( useSelect( blockEditorStore ) );
	const programmaticZoomOutChange = useRef( null );

	useEffect( () => {
		const isZoomOutOnMount = isZoomOut();

		return () => {
			// We never changed modes for them, so there is nothing to do.
			if ( programmaticZoomOutChange.current === null ) {
				return;
			}

			// If zoom out mode was exited for the user and they were originally in zoom out mode, re-enter zoom out mode.
			if (
				programmaticZoomOutChange.current === false &&
				isZoomOutOnMount
			) {
				setZoomLevel( 'auto-scaled' );
			}
			// Zoom out was activated for the user, and they were not originally in zoom out mode, so reset the zoom level.
			else if (
				programmaticZoomOutChange.current === true &&
				isZoomOut() &&
				! isZoomOutOnMount
			) {
				resetZoomLevel();
			}
		};
	}, [] );

	useEffect( () => {
		if ( zoomOut && ! isZoomOut() ) {
			programmaticZoomOutChange.current = true;
			setZoomLevel( 'auto-scaled' );
		} else if ( ! zoomOut && isZoomOut() ) {
			programmaticZoomOutChange.current = false;
			resetZoomLevel();
		}
	}, [ zoomOut, setZoomLevel, isZoomOut, resetZoomLevel ] );
}

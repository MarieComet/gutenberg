/**
 * WordPress dependencies
 */
import { useMemo, useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { Dropdown } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { safeDecodeURIComponent } from '@wordpress/url';
import { store as coreStore } from '@wordpress/core-data';

/**
 * Internal dependencies
 */
import PostURLCheck from './check';
import PostURL from './index';
import PostPanelRow from '../post-panel-row';
import { store as editorStore } from '../../store';
import PostPanelRowButton from '../post-panel-row-button';

/**
 * Renders the `PostURLPanel` component.
 *
 * @return {React.ReactNode} The rendered PostURLPanel component.
 */
export default function PostURLPanel() {
	const { isFrontPage } = useSelect( ( select ) => {
		const { getCurrentPostId } = select( editorStore );
		const { getEditedEntityRecord, canUser } = select( coreStore );
		const siteSettings = canUser( 'read', {
			kind: 'root',
			name: 'site',
		} )
			? getEditedEntityRecord( 'root', 'site' )
			: undefined;
		const _id = getCurrentPostId();
		return {
			isFrontPage: siteSettings?.page_on_front === _id,
		};
	}, [] );
	// Use internal state instead of a ref to make sure that the component
	// re-renders when the popover's anchor updates.
	const [ popoverAnchor, setPopoverAnchor ] = useState( null );
	// Memoize popoverProps to avoid returning a new object every time.
	const popoverProps = useMemo(
		() => ( {
			// Anchor the popover to the middle of the entire row so that it doesn't
			// move around when the label changes.
			anchor: popoverAnchor,
			placement: 'left-start',
			offset: 36,
			shift: true,
		} ),
		[ popoverAnchor ]
	);

	return (
		<PostURLCheck>
			<PostPanelRow ref={ setPopoverAnchor }>
				{ ! isFrontPage && (
					<Dropdown
						popoverProps={ popoverProps }
						className="editor-post-url__panel-dropdown"
						contentClassName="editor-post-url__panel-dialog"
						focusOnMount
						renderToggle={ ( { isOpen, onToggle } ) => (
							<PostURLToggle
								isOpen={ isOpen }
								onClick={ onToggle }
								label={ __( 'Slug' ) }
							/>
						) }
						renderContent={ ( { onClose } ) => (
							<PostURL onClose={ onClose } />
						) }
					/>
				) }
				{ isFrontPage && <FrontPageLink /> }
			</PostPanelRow>
		</PostURLCheck>
	);
}

function PostURLToggle( { isOpen, onClick, label } ) {
	const { slug } = useSelect( ( select ) => {
		return {
			slug: select( editorStore ).getEditedPostSlug(),
		};
	}, [] );
	const decodedSlug = safeDecodeURIComponent( slug );
	return (
		<PostPanelRowButton
			label={ label }
			displayedValue={ <>{ decodedSlug }</> }
			className="editor-post-url__panel-toggle"
			onClick={ onClick }
			isExpanded={ isOpen }
		/>
	);
}

function FrontPageLink() {
	const { postLink } = useSelect( ( select ) => {
		const { getCurrentPost } = select( editorStore );
		return {
			postLink: getCurrentPost()?.link,
		};
	}, [] );

	return (
		<PostPanelRowButton
			label={ __( 'Link' ) }
			displayedValue={
				<span>
					<span>{ postLink } &#8599;</span>
				</span>
			}
			description={
				<>
					{
						/* translators: accessibility text */
						__( '(opens in a new tab)' )
					}
					{ postLink }
				</>
			}
			href={ postLink }
			target="_blank"
			className="editor-post-url__front-page-link"
		/>
	);
}

/**
 * WordPress dependencies
 */
import { store, getContext, getElement } from '@wordpress/interactivity';

const focusableSelectors = [
	'a[href]',
	'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
	'select:not([disabled]):not([aria-hidden])',
	'textarea:not([disabled]):not([aria-hidden])',
	'button:not([disabled]):not([aria-hidden])',
	'[contenteditable]',
	'[tabindex]:not([tabindex^="-"])',
];

// This is a fix for Safari in iOS/iPadOS. Without it, Safari doesn't focus out
// when the user taps in the body. It can be removed once we add an overlay to
// capture the clicks, instead of relying on the focusout event.
document.addEventListener( 'click', () => {} );

const { state, actions } = store(
	'core/navigation',
	{
		state: {
			get roleAttribute() {
				const ctx = getContext();
				return ctx.type === 'overlay' && state.isMenuOpen
					? 'dialog'
					: null;
			},
			get ariaModal() {
				const ctx = getContext();
				return ctx.type === 'overlay' && state.isMenuOpen
					? 'true'
					: null;
			},
			get ariaLabel() {
				const ctx = getContext();
				return ctx.type === 'overlay' && state.isMenuOpen
					? ctx.ariaLabel
					: null;
			},
			get isMenuOpen() {
				// The menu is opened if either `click`, `hover` or `focus` is true.
				return (
					Object.values( state.menuOpenedBy ).filter( Boolean )
						.length > 0
				);
			},
			get menuOpenedBy() {
				const ctx = getContext();
				return ctx.type === 'overlay'
					? ctx.overlayOpenedBy
					: ctx.submenuOpenedBy;
			},
		},
		actions: {
			openMenuOnHover() {
				const { type, overlayOpenedBy } = getContext();
				if (
					type === 'submenu' &&
					// Only open on hover if the overlay is closed.
					Object.values( overlayOpenedBy || {} ).filter( Boolean )
						.length === 0
				) {
					actions.openMenu( 'hover' );
				}
			},
			closeMenuOnHover() {
				const { type, overlayOpenedBy } = getContext();
				if (
					type === 'submenu' &&
					// Only close on hover if the overlay is closed.
					Object.values( overlayOpenedBy || {} ).filter( Boolean )
						.length === 0
				) {
					actions.closeMenu( 'hover' );
				}
			},
			openMenuOnFocus() {
				const { type } = getContext();
				if ( type === 'submenu' ) {
					actions.openMenu( 'focus' );
				}
			},
			toggleMenuOnClick() {
				const ctx = getContext();
				if ( ctx.type === 'submenu' ) {
					const { ref } = getElement();
					// Safari won't send focus to the clicked element, so we need to manually place it: https://bugs.webkit.org/show_bug.cgi?id=22261
					if ( window.document.activeElement !== ref ) {
						ref.focus();
					}
					const { menuOpenedBy } = state;
					if ( menuOpenedBy.click || menuOpenedBy.focus ) {
						actions.closeMenu( 'click' );
						actions.closeMenu( 'focus' );
					} else {
						ctx.previousFocus = ref;
						actions.openMenu( 'click' );
					}
				}
			},
			handleMenuKeydown( event ) {
				const { type, firstFocusableElement, lastFocusableElement } =
					getContext();
				if ( state.menuOpenedBy.click ) {
					// If Escape close the menu. For the overlay this works out of the box due to [popover].
					if ( type === 'submenu' && event?.key === 'Escape' ) {
						actions.closeMenu( 'click' );
						actions.closeMenu( 'focus' );
						return;
					}

					// Trap focus if it is an overlay (main menu).
					if ( type === 'overlay' && event.key === 'Tab' ) {
						// If shift + tab it change the direction.
						if (
							event.shiftKey &&
							window.document.activeElement ===
								firstFocusableElement
						) {
							event.preventDefault();
							lastFocusableElement.focus();
						} else if (
							! event.shiftKey &&
							window.document.activeElement ===
								lastFocusableElement
						) {
							event.preventDefault();
							firstFocusableElement.focus();
						}
					}
				}
			},
			handleMenuFocusout( event ) {
				const { modal, type } = getContext();
				// If focus is outside modal, and in the document, close menu
				// event.target === The element losing focus
				// event.relatedTarget === The element receiving focus (if any)
				// When focusout is outside the document,
				// `window.document.activeElement` doesn't change.

				// The event.relatedTarget is null when something outside the navigation menu is clicked. This is only necessary for Safari.
				if (
					event.relatedTarget === null ||
					( ! modal?.contains( event.relatedTarget ) &&
						event.target !== window.document.activeElement &&
						type === 'submenu' )
				) {
					actions.closeMenu( 'click' );
					actions.closeMenu( 'focus' );
				}
			},

			handleToggle( event ) {
				const ctx = getContext();
				window.console.log( event.newState, ctx );
				if ( event.newState === 'open' ) {
					// Ensure state is up to date.
					if ( ! state.isMenuOpen ) {
						state.menuOpenedBy.click = true;
					}
					if ( ctx.type === 'overlay' ) {
						// Add a `has-modal-open` class to the <html> root.
						document.documentElement.classList.add(
							'has-modal-open'
						);
					}
				} else {
					// Ensure state is up to date.
					if ( state.isMenuOpen ) {
						state.menuOpenedBy.click = false;
						state.menuOpenedBy.focus = false;
						state.menuOpenedBy.hover = false;
					}
					if (
						ctx.type !== 'overlay' &&
						ctx.modal?.contains( window.document.activeElement )
					) {
						ctx.previousFocus?.focus();
					}
					ctx.modal = null;
					ctx.previousFocus = null;
					if ( ctx.type === 'overlay' ) {
						document.documentElement.classList.remove(
							'has-modal-open'
						);
					}
				}
			},

			openMenu( menuOpenedOn = 'click' ) {
				const ctx = getContext();
				window.console.log( 'openMenu', ctx.modal );
				state.menuOpenedBy[ menuOpenedOn ] = true;
				ctx.modal?.showPopover();
			},

			closeMenu( menuClosedOn = 'click' ) {
				const ctx = getContext();
				window.console.log( 'closeMenu', ctx.modal );
				state.menuOpenedBy[ menuClosedOn ] = false;
				// Check if the menu is still open or not.
				if ( ! state.isMenuOpen ) {
					ctx.modal?.hidePopover();
				}
			},
		},
		callbacks: {
			initMenu() {
				const ctx = getContext();
				const { ref } = getElement();
				window.console.log( 'watchmenu', state.isMenuOpen, ref );
				if ( state.isMenuOpen ) {
					const focusableElements =
						ref.querySelectorAll( focusableSelectors );
					ctx.modal = ref;
					ctx.firstFocusableElement = focusableElements[ 0 ];
					ctx.lastFocusableElement =
						focusableElements[ focusableElements.length - 1 ];
				}
			},
			focusFirstElement() {
				const { ref } = getElement();
				if ( state.isMenuOpen ) {
					const focusableElements =
						ref.querySelectorAll( focusableSelectors );
					focusableElements?.[ 0 ]?.focus();
				}
			},
		},
	},
	{ lock: true }
);

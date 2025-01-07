/**
 * External dependencies
 */
import { hydrate, type ContainerNode, type ComponentChild } from 'preact';
/**
 * Internal dependencies
 */
import { toVdom, hydratedIslands } from './vdom';
import { createRootFragment, splitTask } from './utils';
import { directivePrefix } from './constants';

// Keep the same root fragment for each interactive region node.
const regionRootFragments = new WeakMap();
export const getRegionRootFragment = ( region: Element ): ContainerNode => {
	if ( ! region.parentElement ) {
		throw Error( 'The passed region should be an element with a parent.' );
	}
	if ( ! regionRootFragments.has( region ) ) {
		regionRootFragments.set(
			region,
			createRootFragment( region.parentElement, region )
		);
	}
	return regionRootFragments.get( region );
};

// Initial vDOM regions associated with its DOM element.
export const initialVdom = new WeakMap< Element, ComponentChild[] >();

// Initialize the router with the initial DOM.
export const init = async () => {
	let observedNodeCount = 0;

	const intersectionObserver = new window.IntersectionObserver(
		async ( entries ) => {
			for ( const entry of entries ) {
				if ( ! entry.isIntersecting ) {
					continue;
				}

				const node = entry.target;
				intersectionObserver.unobserve( node );
				observedNodeCount--;
				if ( observedNodeCount === 0 ) {
					intersectionObserver.disconnect();
				}

				if ( ! hydratedIslands.has( node ) ) {
					const fragment = getRegionRootFragment( node );
					const vdom = toVdom( node );
					await splitTask();
					hydrate( vdom, fragment );
					await splitTask();
				}
			}
		},
		{
			root: null, // To watch for intersection relative to the device's viewport.
			rootMargin: '100% 0% 100% 0%', // Intersect when within 1 viewport approaching from top or bottom.
			threshold: 0.0, // As soon as even one pixel is visible.
		}
	);

	const nodes = document.querySelectorAll(
		`[data-${ directivePrefix }-interactive]`
	);

	/*
	 * This `await` with setTimeout is required to apparently ensure that the interactive blocks have their stores
	 * fully initialized prior to hydrating the blocks. If this is not present, then an error occurs, for example:
	 * > view.js:46 Uncaught (in promise) ReferenceError: Cannot access 'state' before initialization
	 * This occurs when splitTask() is implemented with scheduler.yield() as opposed to setTimeout(), as with the former
	 * split tasks are added to the front of the task queue whereas with the latter they are added to the end of the queue.
	 */
	await new Promise( ( resolve ) => {
		setTimeout( resolve, 0 );
	} );

	observedNodeCount = nodes.length;
	for ( const node of nodes ) {
		intersectionObserver.observe( node );
	}
};

<?php
/**
 * WordPress scripts and styles default loader.
 *
 * @package gutenberg
 */

add_action( 'wp_default_styles', 'gutenberg_register_admin_schemes_stylesheet' );

/**
 * Register the base styles asset.
 *
 * @param WP_Styles $styles WP_Styles instance.
 */
function gutenberg_register_admin_schemes_stylesheet( $styles ) {

	$styles->add(
		'wp-admin-schemes',
		gutenberg_url( 'build/base-styles/admin-schemes.css' )
	);
}

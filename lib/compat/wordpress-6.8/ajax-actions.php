<?php
/**
 * Temporary compatibility shims for Core Ajax handlers.
 *
 * @package gutenberg
 */

/**
 * Handles renewing the REST API nonce via AJAX.
 *
 * @since 5.3.0
 * @since 6.8.0 Returns an error if a renewed nonce isn't valid.
 */
function gutenberg_ajax_rest_nonce() {
	$nonce  = wp_create_nonce( 'wp_rest' );
	$result = wp_verify_nonce( $nonce, 'wp_rest' );
	if ( ! $result ) {
		wp_send_json_error( null, rest_authorization_required_code() );
	}

	exit( $result );
}
add_action( 'wp_ajax_rest-nonce', 'gutenberg_ajax_rest_nonce', 0 );

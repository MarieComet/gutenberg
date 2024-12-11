<?php

add_action(
	'wp_enqueue_scripts',
	function () {
		wp_enqueue_script_module( '@wordpress/core-editor' );
	}
);

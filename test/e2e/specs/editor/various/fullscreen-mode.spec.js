/**
 * WordPress dependencies
 */
const { test, expect } = require( '@wordpress/e2e-test-utils-playwright' );

test.describe( 'Fullscreen Mode', () => {
	test.beforeEach( async ( { admin, editor } ) => {
		await admin.createNewPost();
		await editor.setPreferences( 'core/edit-post', {
			fullscreenMode: false,
		} );
	} );

	test.afterEach( async ( { requestUtils, editor } ) => {
		await requestUtils.deleteAllPosts();
		await editor.setPreferences( 'core/edit-post', {
			fullscreenMode: true,
		} );
	} );

	test( 'should open the fullscreen mode from the more menu', async ( {
		page,
	} ) => {
		// Open Options Menu
		await page.click(
			'role=region[name="Editor top bar"i] >> role=button[name="Options"i]'
		);

		// Select Full Screen Mode
		await page
			.locator( 'role=menuitemcheckbox', { hasText: 'Fullscreen mode' } )
			.click();

		// Check the body class.
		await expect( page.locator( 'body' ) ).toHaveClass(
			/is-fullscreen-mode/
		);

		await expect(
			page.locator(
				'role=region[name="Editor top bar"i] >> role=link[name="View Posts"i]'
			)
		).toBeVisible();
	} );
} );

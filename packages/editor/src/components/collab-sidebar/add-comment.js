/**
 * WordPress dependencies
 */
import { _x } from '@wordpress/i18n';
import { __experimentalHStack as HStack } from '@wordpress/components';

/**
 * Internal dependencies
 */
import CommentAuthorInfo from './comment-author-info';
import CommentForm from './comment-form';

/**
 * Renders the UI for adding a comment in the Gutenberg editor's collaboration sidebar.
 *
 * @param {Object}   props                 - The component props.
 * @param {Function} props.onSubmit        - A callback function to be called when the user submits a comment.
 * @param {Function} props.setIsNewComment - The function to set the new comment board visibility.
 * @return {React.ReactNode} The rendered comment input UI.
 */
export function AddComment( { onSubmit, setIsNewComment } ) {
	return (
		<>
			<HStack alignment="left" spacing="3">
				<CommentAuthorInfo />
			</HStack>
			<CommentForm
				onSubmit={ ( inputComment ) => {
					onSubmit( inputComment );
					setIsNewComment( false );
				} }
				onCancel={ () => {
					setIsNewComment( false );
				} }
				submitButtonText={ _x( 'Comment', 'Add comment button' ) }
			/>
		</>
	);
}

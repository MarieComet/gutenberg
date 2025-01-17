/**
 * External dependencies
 */
import clsx from 'clsx';

/**
 * WordPress dependencies
 */
import {
	Button,
	Icon,
	__experimentalHStack as HStack,
} from '@wordpress/components';
import { useInstanceId } from '@wordpress/compose';

export default function PostPanelRowButton( {
	className,
	onClick,
	label,
	displayedValue,
	icon,
	isExpanded,
} ) {
	const descriptionId = useInstanceId(
		PostPanelRowButton,
		'editor-post-panel__row-button-description'
	);

	return (
		<>
			<Button
				className={ clsx( 'editor-post-panel__row-button', className ) }
				variant="tertiary"
				size="compact"
				aria-expanded={ isExpanded }
				onClick={ onClick }
				aria-describedby={ descriptionId }
			>
				<HStack as="span">
					<span className="editor-post-panel__row-button-label">
						{ label }
					</span>
					<span
						className="editor-post-panel__row-button-value"
						aria-hidden="true"
					>
						{ icon && <Icon icon={ icon } /> }
						{ displayedValue }
					</span>
				</HStack>
			</Button>
			<div hidden id={ descriptionId }>
				{ displayedValue }
			</div>
		</>
	);
}

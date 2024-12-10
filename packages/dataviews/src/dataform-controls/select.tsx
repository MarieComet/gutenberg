/**
 * WordPress dependencies
 */
import { SelectControl } from '@wordpress/components';
import { useCallback } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import type { DataFormControlPropsWithBulkEditing } from '../types';

export default function Select< Item >( {
	field,
	onChange,
	hideLabelFromVision,
	value,
}: DataFormControlPropsWithBulkEditing< Item, string | number > ) {
	const { id, label } = field;
	const onChangeControl = useCallback(
		( newValue: any ) =>
			onChange( {
				[ id ]: newValue,
			} ),
		[ id, onChange ]
	);

	const elements = [
		/*
		 * Value can be undefined when:
		 *
		 * - the field is not required
		 * - in bulk editing
		 *
		 */
		{ label: __( 'Select item' ), value: '' },
		...( field?.elements ?? [] ),
	];

	return (
		<SelectControl
			label={ label }
			value={ typeof value === 'symbol' ? '' : value }
			options={ elements }
			onChange={ onChangeControl }
			__next40pxDefaultSize
			__nextHasNoMarginBottom
			hideLabelFromVision={ hideLabelFromVision }
		/>
	);
}

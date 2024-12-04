/**
 * WordPress dependencies
 */
import { createContext } from '@wordpress/element';

/**
 * Internal dependencies
 */
import type { FormValidationState } from '../../dataform-hooks/use-form';
import { useValidation } from '../../dataform-hooks/use-form';
import type { NormalizedField } from '../../types';

type DataFormContextType< Item > = {
	fields: NormalizedField< Item >[];
	validation: FormValidationState;
};

const DataFormContext = createContext< DataFormContextType< any > >( {
	fields: [],
	validation: {
		setTouchedFields: () => {},
		setErrors: () => {},
		isFormValid: () => false,
		touchedFields: [],
		errorMessages: {},
	},
} );

export function DataFormProvider< Item >( {
	fields,
	validation: validationStateFromConsumer,
	children,
}: React.PropsWithChildren< {
	fields: NormalizedField< Item >[];
	validation?: FormValidationState;
} > ) {
	const validationStateFromHook = useValidation();

	const validation = validationStateFromConsumer ?? validationStateFromHook;

	return (
		<DataFormContext.Provider value={ { fields, validation } }>
			{ children }
		</DataFormContext.Provider>
	);
}

export default DataFormContext;

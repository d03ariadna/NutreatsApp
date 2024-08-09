import { useEffect, useMemo, useState } from 'react';
import { FormState, FormValidation, FormValidations } from '../types';


export const useForm = <T extends FormState>(
    initialForm: T = {} as T,
    formValidations: FormValidations = {}
) => {
  
    const [ formState, setFormState ] = useState<T>( initialForm );
    const [ formValidation, setFormValidation ] = useState<string[]>([]);

    useEffect(() => {
        createValidators();
    }, [ formState ])

    useEffect(() => {
        setFormState( initialForm );
    }, [ initialForm ])
    
    
    const isFormValid = useMemo( () => {

        // for (const formValue of Object.keys( formValidation )) {
        //     if ( formValidation[formValue] !== null ) return false;
        // }

        if (formValidation.length > 0) return false;

        return true;
    }, [ formValidation ])


    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        const { name, value } = event.target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = () => {
        
        let formCheckedValues: string[] = [];
        
        for (const formField of Object.keys( formValidations )) {
            const [ fn, errorMessage ] = formValidations[formField];

            if (!fn(formState[formField])) {
                formCheckedValues.push(errorMessage);
                continue;
            }
            // formCheckedValues[`${ formField }Valid`] = fn( formState[formField] ) ? null : errorMessage;
        }

        // console.log(formCheckedValues)
        setFormValidation( formCheckedValues );
    }



    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,

        formValidation,
        isFormValid
    }
}
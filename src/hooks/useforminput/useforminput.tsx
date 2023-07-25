import { useState, useRef, useImperativeHandle } from "react";

// Create a custom hook named useFormInput that manages the state of a form input field.

export default function useFormInput(initialValue: string){
    // The custom hook should accept an initial value for the input field as its parameter
    
    // Use the useFormInput custom hook to manage the state of the input field.
    const [state, setState] = useState<string>(initialValue);

    // TODO: Check Input Validity

    function saveLocalState(val: string){
        // Once valid, Save value to Local Storage
        localStorage.setItem('formInput', val);
        console.log('saving to local storage');

        setState(val);
    }

    // return an object with the following properties:
        // value: The current value of the input field.
        // handleChange: A function to handle changes in the input field's value.
    return({
        value: state,
        handleChange: (val: string) => {saveLocalState(val)}
    })
}


// Create a Custom Hook for Data Fetching:
// See hooks/usedatafetching/usedatafetching.tsx


// Intertwine the Custom Hooks:
// Create a component named FormWithFetch that utilizes the useFormInput and useDataFetching custom hooks.
// See Components/formwithfetch/formwithfetch.tsx


// Test the Component:

// Render the FormWithFetch component in your application and verify that it functions correctly. - done

// Test the form input by entering different values and ensuring that the state is updated accordingly. - done

// Submit the form and observe the loading state while the data is being fetched. - done

// Confirm that the fetched data is displayed correctly in the component. - done
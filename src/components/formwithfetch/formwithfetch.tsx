import useFormInput from "@/hooks/useforminput/useforminput"
import useDataFetching from "@/hooks/usedatafetching/usedatafetching";
import { FormEvent } from "react";

export default function FormWithFetch(){

    const {value, handleChange} = useFormInput('');
    const {values, runner} = useDataFetching();
    const {loading, error, data} = values; 


    // The component should render a form with an input field and a button.
    return(
        <form onSubmit={(eve) => onFormSubmit(eve)}>
            <label htmlFor="inp"> Input </label>
            {/* // Use the useFormInput custom hook to manage the state of the input field. */}
            <input id="inp" type="text" onChange={(e: any) => handleChange(e.target.value)} value={value}/>
            <br/>
            <button type="submit"> FormWithFetch </button>
            <p> {!loading && data} </p>
            <p> {!loading && error} </p>
        </form>
    )
    
    
    // Use the useDataFetching custom hook to fetch data from the local dummy source when the form is submitted.
    function onFormSubmit(eve: FormEvent<HTMLFormElement>){
        eve.preventDefault();
        runner();
    }

    // Display the fetched data in the component when it becomes available.

    // Handle and display any loading or error states during the data fetching process.

}
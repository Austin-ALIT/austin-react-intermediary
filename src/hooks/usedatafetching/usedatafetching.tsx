// Create a custom hook named useDataFetching that handles the fetching of data from a set of local dummy data.

import { useState } from "react";

export default function useDataFetching(){
    // The custom hook should fetch the data when the component using it mounts
    // async

    const [fetched, setfetched] = useState({
        loading: false, 
        data: '', 
        error: ''
    })

    // Use the useDataFetching custom hook to fetch data from the local dummy source when the form is submitted.
    const forminput = async () => {
        try {
            let inp: any = await testStorage();
            setfetched((prevFetched) => ({...prevFetched, data: inp}));
            setfetched((prevFetched) => ({...prevFetched, error: ''}));
        } catch (err: any) {
            setfetched((prevFetched) => ({...prevFetched, error: err}));
            setfetched((prevFetched) => ({...prevFetched, data: ''}));
        } finally {
            setfetched((prevFetched) => ({...prevFetched, loading: false}));
        }
    }

    // Note: Had to research promises & async, heance the delay in completing this component. 

    function testStorage(){
        return new Promise((resolve, reject)=>{
            setfetched((prevFetched) => ({...prevFetched, loading: true}));
            let inp = localStorage.getItem('formInput');
            console.log(`fetching from local storage ${inp}`);
            if (inp === null){
                reject('Value not yet stored');
            } else if (inp === ''){
                reject('Value is blank');
            } 
            else{
                resolve(inp);
            }
        })
    }

    // return an object with the following properties:
        // loading: A boolean value indicating whether the data is being fetched.
        // data: The fetched data from the local dummy source.
        // error: Any error that occurred during the data fetching process.
    return({values: fetched, runner: forminput})
}





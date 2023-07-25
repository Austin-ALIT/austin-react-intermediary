// Create a custom hook named useDataFetching that handles the fetching of data from a set of local dummy data.

function useDataFetching(){
    // The custom hook should fetch the data when the component using it mounts and 
    // API's?

    // Use the useDataFetching custom hook to fetch data from the local dummy source when the form is submitted.

    // return an object with the following properties:
        // loading: A boolean value indicating whether the data is being fetched.
        // data: The fetched data from the local dummy source.
        // error: Any error that occurred during the data fetching process.
    return({
        loading: false, 
        data: '', 
        error: ''
    })
}





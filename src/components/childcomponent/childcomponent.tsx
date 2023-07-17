// Import the useContext hook from the 'react' package.
import AuthContext, { ContextConsumer, ContextProvider } from "@/context/authcontext/authcontext";
import { useContext } from "react";

export default function ChildComponent(){
    // Inside the ChildComponent, use the useContext hook to access the context value.
    const contex = useContext(AuthContext);

    // Display the context data in the component's render.
    return(
        <>
            <p> {`Authenticated: ${contex.value.isAuthenticated}`} </p>
            <p> {`Authorised: ${contex.value.isAuthorised}`} </p>
            <br/> 

            {/* // Add a buttons or input fields to the ChildComponent that allows the user to modify the context data. */}
            <div> 
                <p> Edit the context data: </p>
                <button onClick={() => contex.changer({type: 'AUTHENTICATION_TOGGLE'})}> Toggle Authentication </button>
                <br/>
                <button onClick={() => contex.changer({type: 'AUTHORISATION_TOGGLE'})}> Toggle Authorisation </button>
            </div>
        </>
    )
}

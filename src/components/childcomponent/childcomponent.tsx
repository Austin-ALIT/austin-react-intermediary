// Import the useContext hook from the 'react' package.
import AuthContext, { ContextConsumer, ContextProvider } from "@/context/authcontext/authcontext";
import { useContext } from "react";

export default function ChildComponent(){
    // Inside the ChildComponent, use the useContext hook to access the context value.
    const contex = useContext(AuthContext);

    // Display the context data in the component's render.
    return(
        <ContextProvider>
            <p> Consumer Method: </p>
            <ContextConsumer/>
            <br/>
            <p> useContext Method: </p>
            <p> {`Authenticated: ${contex.isAuthenticated}`} </p>
            <p> {`Authorised: ${contex.isAuthorised}`} </p>
        </ContextProvider>
    )
}

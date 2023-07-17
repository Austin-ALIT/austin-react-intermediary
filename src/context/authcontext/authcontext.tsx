// Set up the Context:

import React from "react";

// Create a Context Wrapper component called “AuthContext” in the context directory. /// -- CHECK
// Set up a new context using the createContext function from the 'react' package.
const AuthContext = React.createContext({
    // Define an initial context value that includes two Boolean states 
    // called “isAuthenticated” and “isAuthorised”.
    isAuthenticated: false,
    isAuthorised: false
});

export default AuthContext;
    
// Create Provider and Consumer Components:
// Create a Provider component that wraps the main App component and provides the context value to its children.
export function ContextProvider(props: any){
    return(
        <AuthContext.Provider value={{
            // To be replaced with a state
            isAuthenticated: false,
            isAuthorised: false
        }}> 
            {props.children}
        </AuthContext.Provider>
    )
}

// Create a Consumer component that will consume the context and display the context data.
export function ContextConsumer(){
    return(
        <AuthContext.Consumer children={(contex) => {
            return(
                <>
                    <p> {`Authenticated: ${contex.isAuthenticated}`} </p>
                    <p> {`Authorised: ${contex.isAuthorised}`} </p>
                </>
            )
        }}/>
    )
}


// Use useContext Hook:

// Create a new component called ChildComponent.
// SEE components/childcomponent/childcomponent.tsx


// Render the Result:

// In the main App component, render the ChildComponent within the Consumer component.

// Display Messages that describe the context state.

// Verify that the context data is correctly displayed in the application.

// Update Context Data:

// Add a buttons or input fields to the ChildComponent that allows the user to modify the context data.

// Implement the necessary logic to update the context data when the user interacts with the buttons or input fields.

// Test and Experiment:

// Test the application by interacting with the UI and verifying that the context data updates correctly.

// Experiment with different use cases, such as nesting components that consume the context or passing the context through multiple levels of components.
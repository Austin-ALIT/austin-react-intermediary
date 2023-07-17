// Set up the Context:

import React, { useReducer, useState } from "react";

// Create a Context Wrapper component called “AuthContext” in the context directory. /// -- CHECK
// Set up a new context using the createContext function from the 'react' package.
const AuthContext = React.createContext({
    // Define an initial context value that includes two Boolean states 
    // called “isAuthenticated” and “isAuthorised”.
    value: { 
        isAuthenticated: false,
        isAuthorised: false
    },
    changer: (((action: object) => {})) 
});

export default AuthContext;
    
function reducer(contexState: any, action: any){
    switch (action.type) {
        case 'AUTHENTICATION_TOGGLE':
            return { ...contexState, isAuthenticated: !(contexState.isAuthenticated)};
        case 'AUTHORISATION_TOGGLE':
            return { ...contexState, isAuthorised: !(contexState.isAuthorised)};
        default: 
            return contexState;
    }
}

// Create Provider and Consumer Components:
// Create a Provider component that wraps the main App component and provides the context value to its children.
export function ContextProvider(props: any){
    const [contexState, dispachContexState] = useReducer(reducer, ({
        // Finally replaced with a state
        isAuthenticated: false,
        isAuthorised: false  
    }));

    function changer(action: object){
        dispachContexState(action);
    }

    const contexStuff = {
        value: contexState,
        changer: changer
    }

    return(
        <AuthContext.Provider value={contexStuff}> 
            {props.children}
        </AuthContext.Provider>
    )
}

// Create a Consumer component that will consume the context and display the context data.
export function ContextConsumer(props: any){
    return(
        <AuthContext.Consumer children={() => {
            return(
                <>
                    {props.children}
                </>
            )
        }}/>
    )
}


// Use useContext Hook:

// Create a new component called ChildComponent.
// SEE components/childcomponent/childcomponent.tsx


// Render the Result:
// See src/app.tsx


// Update Context Data:

// Add a buttons or input fields to the ChildComponent that allows the user to modify the context data.
// See components/childcomponent/childcomponent.tsx

// Implement the necessary logic to update the context data when the user interacts with the buttons or input fields.
// See Above

// Test and Experiment:

// Test the application by interacting with the UI and verifying that the context data updates correctly. - done

// Experiment with different use cases, such as nesting components that consume the context or passing the context through multiple levels of components.
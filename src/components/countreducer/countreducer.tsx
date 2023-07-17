import React from "react";
import { useReducer, useState } from "react";

// Got an error: cannot read null property of useReducer. 
    // Fixed by moving useReducer into CountReducer. 

function countWorks(count: number, action: any): number{ // State variable then action for the parameters. 
                                                        // works well with object destructuring, which i am not using an object here. 
    switch(action.type){
        case 'INCREMENT':
            return(count + 1);        
            case 'DECREMENT':
                return(count - 1);        
        default: 
            return(count);
    }
}

export default function CountReducer(){   
    const [count, dispachCount] = useReducer(countWorks, 0);
    return(
        <>
            <p> {count} </p>
            <button onClick={() => dispachCount({type: 'INCREMENT'})}> Increment </button>
            <button onClick={() => dispachCount({type: 'DECREMENT'})}> Decrement </button>
        </>
    )
}
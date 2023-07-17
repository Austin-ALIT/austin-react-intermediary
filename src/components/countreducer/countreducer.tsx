import React from "react";
import { useReducer, useState } from "react";

const [count, dispachCount] = useReducer(countWorks, 0);

function countWorks(action: any, effect: any): number{
    
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
    return(
        <>
            <p> {count} </p>
            <button onClick={() => dispachCount({type: 'INCREMENT'})}> Increment </button>
            <button onClick={() => dispachCount({type: 'DECREMENT'})}> Decrement </button>
        </>
    )
}
// Set up the branch:
// Using your previously created repo, start a new feature branch called “side-effects“.
/* Entered Commands: 
git flow feature start side-effects

*/

import { useEffect, useState } from "react"


// Create a Counter Component:
// Create a functional component named Counter.
export default function Counter(){
    // Inside the component, declare a state variable count using the useState hook, with an initial value of 0.
    const [count, setCount] = useState<number>(0);
        
    // Use the useEffect hook to set up an interval that increments the count every second.
    useEffect(()=> {
        const timea = setTimeout(()=>{
            let newCount = count+1;
            setCount(newCount);
            console.log(count+1);
        }, 1000)
        // Clean up the Interval:
        // Inside the useEffect hook, return a cleanup function that clears the interval when the component unmounts.
        return(()=>{
            clearTimeout(timea);
        })

    }, [count])

    return(
        <>
            {/* // Display the current value of count in the component. */}
            <p> Count: {count} </p>
            {/* // Test the cleanup by unmounting the component and verifying that the interval is properly cleared. */}
            {/* console.log('unmounted') // Displayes unmounted twice when component is hidden. I would call that a success.  */}
        </>
    )
}

// Style the Component (optional):
// Apply CSS styles to the Counter component or use a UI library like Material-UI to enhance the visual appearance.


// Test and Verify:

// Ensure that the React app runs without any errors or warnings. - done
// Verify that the Counter component displays and increments the count correctly. - done
// Test the cleanup by unmounting the component and confirming that the interval is properly cleared. - done


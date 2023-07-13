/* Commands run for this segment: 
git flow init
git flow feature start conditional-rendering
git add .
git commit -m "Completed conditional-rendering"
git flow feature finish conditional-rendering
git flow release start released
git flow release finish released
git checkout master
git push origin master
*/

import { useState } from "react"

// Create a functional component:
// Create a functional component named ConditionalRendering inside the components directory.



export default function ConditionalRendering(){
    // Inside the component, declare a state variable called showContent using the useState hook. Initialize it to false.
    const [showContent, setShowContent] = useState<boolean>(false);

    return(
        <>
            {/* // Implement conditional rendering: */}
            {/* // Using an AND operator or the ternary operator, conditionally render different content based on the value of showContent. */}
            {/* // When showContent is true, display a message like "Content is visible!". */}
            {showContent && <p> Content is visible! </p>}
            {/* // When showContent is false, display a message like "Content is hidden!". */}
            {!showContent && <p> Content is Hidden! </p>}

            {/* // Add a button to toggle the state: */}
            {/* // Below the rendered content, add a button element with the label "Toggle Content". */}
            {/* // On button click, update the value of showContent to the opposite of its current value using the setShowContent function. */}
            <button onClick={() => setShowContent(!showContent)}> Toggle Content </button>
        </>
    )
}

// Test and observe:
// Start the Next.js app and access the rendered component in your browser. - done
// Observe the initial rendered message based on the initial state value. - done. 
// Click the "Toggle Content" button and observe how the content changes between "Content is visible!" and "Content is hidden!". - done












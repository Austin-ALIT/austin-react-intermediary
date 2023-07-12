// Create a functional component named TaskTracker in the 'components' directory.

// Inside the component, import the useState hook from the 'react' package.
import { ChangeEvent, useState } from "react"

type Task = {
    name: string, 
    completed: boolean
}

export default function TaskTracker(){
    // Use the useState hook to define a tasks state variable, initialized as an empty array.
    const [tasks, setTasks] = useState<Task[]>([{name: 'Example Task', completed: false}]);
    // const [cbStatus, setCBStatus] = useState<boolean>(false);
    
    let newTask:Task = {name: '', completed: false};

    function taskSaveHandler(e: ChangeEvent<HTMLInputElement>){
        newTask.name = e.target.value;
    }

    // Implement an event handler for the add button that adds a new task to the tasks array.
    function addTaskHandler(event: any){
        // event.preventDefault() // To prevent page refreshing onClick
        setTasks((prevTask) => [...prevTask, newTask]);
    }
    
    // Implement an event handler for the checkbox that updates the completed status of the corresponding task.
    function taskCompleteHandler(task: Task, event: ChangeEvent<HTMLInputElement>){
        /* Mark Task as Completed */
        // event.preventDefault();
        // Step 1: FIND TASK
        let ind = tasks.indexOf(task);
        let value = event.target.checked;
        
        // Step 2: update name field
        let newTasks = tasks;
        newTasks[ind].completed = value; 

        // Step 3: update the rest of the array
        console.log(newTasks);
        setTasks((prevTasks) => newTasks);




        // use destructuring
        // let myTask = tasks[tasks.indexOf(task)]


        // setTasks(tasks[tasks.indexOf(task)].completed = 'on')
        
        // let newVal = (!(event.target.checked)); 
        // let newVal =  

        // setCBStatus(event.target.checked);
        // console.log(newVal);

        // Works, but the page is not updating. 

    }
    function taskDeleteHander(task: Task, event: any){
        let ind = tasks.indexOf(task);
        // let newTasks = tasks.splice(ind, 1)
        let newTasks = tasks;
        console.log(ind);
        let removed = newTasks.splice(ind,1);
        setTasks(newTasks);

        // Works but the page does not update. 
    }
    

    return(
        <div>
            {/* // Display an input field and a button to add tasks. */}
            <div>
                <label> Input Task: </label>
                <input onChange={taskSaveHandler}></input>
                <button onClick={addTaskHandler}> Add Tasks </button>
            </div>
            
            {/* // Display the list of tasks below the input field, showing the task name and a checkbox to mark the task as completed. */}
            <ul>
                {/* This is not updating when a change is made. sometimes  */}
                
                {tasks.map(t => {
                    return(
                            <li key={t.name}>
                                <input type="checkbox" onChange={(e: any) => {taskCompleteHandler(t, e)}} checked={t.completed}></input> 
                                <label> {t.name} </label> 
                                <label> ({t.completed? 'done' : 'todo'}) </label> 
                                {/* // Add a delete button next to each task that removes the task from the tasks array when clicked. */}
                                {/* <td> <button onClick={(e: any) => taskDeleteHander(t,e)}> Remove </button> </td> */}
                            </li>
                    )

                })}
            </ul>
        </div>
    )
}



// Stuff that will bankrupt me: Strikethrough if task is completed














































// import { type } from "os";
// import { ChangeEvent, useState } from "react"

// export type TaskType = {name: string, completed: boolean};

// export default function TaskTracker(){
    
//     // let initialArray: Array<tasktype> = [];
//     const [tasks, setTasks] = useState<TaskType[]>([]);


//     let taskinput='';

//     function onButtonClick(){
//         let newTask = {name: taskinput, completed: false};
//         setTasks([...tasks, newTask]);
//     }

//     function onCheckboxClick(e: any){
//         // get the checkbox value
//         let cbValue = e.target.value;

//         // get the task
//         for (let t of tasks){ // TODO: Improve this code. Maybe reduce? 
//             if (t.name == e.target.id) {
//                 let currentTask = tasks.indexOf(t);
                
//                 // update the task to the checkbox value
//                 let workingTasks = tasks;
//                 workingTasks[currentTask].completed = cbValue;
//                 setTasks(workingTasks);
//             }
//         }

//     }

//     function onBtnDeleteClick(e: any){
//         let ind = e.target.id;
//         let newTasks = tasks;
//         newTasks.splice(newTasks.indexOf(ind),1);
//         setTasks(newTasks);
//     }
    
//     return(
//         <>
//             <label> Input a task: </label>
//             <input type="text" onChange={(e) => {taskinput = e.target.value}}></input>
//             <br/>
//             <button onClick={onButtonClick}> Add Tasks </button>
//             <br/>
//             {/* Displaying the list of tasks */}
//             {tasks.map((t) => {
//                 // Possible error: .name not recodnised on empty array.                
//                 // ---------- TODO: t.completed is not showing. Investigate. 
//                 return(
//                     <> 
//                         <label> {t.name} {t.completed} </label>
//                         <input type="checkbox" onChange={onCheckboxClick} id={t.name} value={`${t.completed}`}></input>
//                         <button onClick={onBtnDeleteClick} id={t.name}> Delete </button>
//                         <br/>
//                     </> 
//                 )
//             })}
//         </>
//     )
// }







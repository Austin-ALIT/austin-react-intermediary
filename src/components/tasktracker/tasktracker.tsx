// Create a functional component named TaskTracker in the 'components' directory.

// Inside the component, import the useState hook from the 'react' package.
import { ChangeEvent, useEffect, useState } from "react"

type Task = {
    name: string, 
    completed: boolean
}

export default function TaskTracker(){
    // Use the useState hook to define a tasks state variable, initialized as an empty array.
    const [tasks, setTasks] = useState<Task[]>([{name: 'Example Task', completed: false}]);
    
    let newTask:Task = {name: '', completed: false};

    function taskSaveHandler(e: ChangeEvent<HTMLInputElement>){
        newTask.name = e.target.value;
    }

    // Implement an event handler for the add button that adds a new task to the tasks array.
    function addTaskHandler(event: any){
        event.preventDefault() // To prevent page refreshing onClick
        setTasks((prevTask) => [...prevTask, newTask]);
    }
    
    // Implement an event handler for the checkbox that updates the completed status of the corresponding task.
    function taskCompleteHandler(task: Task, event: ChangeEvent<HTMLInputElement>){
        let newTasks = tasks;
        setTasks(
            newTasks.map((t) => 
                ((t.name === event.target.id) ? {...t, completed: !(t.completed)} : t)
            )
        );
    }

    function taskDeleteHander(event: any, ind: number){
        setTasks( (prevTasks) => {
                let newTasks = [...prevTasks];
                newTasks.splice(ind, 1);
                console.log(ind);
                return(newTasks);
            }
        );
    }
    
    function checkHandler(task: Task): boolean{
        return task.completed;
    }
    
    return(
        <div >
            {/* // Display an input field and a button to add tasks. */}
            <div>
                <label> Input Task: </label>
                <input onChange={taskSaveHandler}></input>
                <button onClick={addTaskHandler}> Add Tasks </button>
            </div>
            
            {/* // Display the list of tasks below the input field, showing the task name and a checkbox to mark the task as completed. */}
            <ul>             
                {tasks.map((t, ind) => {
                    return(
                            <li key={ind}>
                                <input type="checkbox" onChange={(e: any) => {taskCompleteHandler(t,e)}} checked={t.completed} id={t.name}></input> 
                                <label> {t.name} </label> 
                                <label> ({t.completed? 'done' : 'todo'}) </label> 

                                {/* // Add a delete button next to each task that removes the task from the tasks array when clicked. */}
                                 <button onClick={(e: any) => taskDeleteHander(e, ind)}> Remove </button> 
                            </li>
                    )
                })}
            </ul>
        </div>
    )
}

// Stuff that will bankrupt me: Strikethrough if task is completed
// Create a functional component named TaskTracker in the 'components' directory.

// (optional) Add styling or use a UI library like Material-UI to improve the appearance of the task tracker.
import styles from '../../styles/components/tasktracker.module.css';

// Inside the component, import the useState hook from the 'react' package.
import { ChangeEvent, useState, useRef } from "react";

type Task = {
    name: string, 
    completed: boolean
}

export default function TaskTracker(){
    // Use the useState hook to define a tasks state variable, initialized as an empty array.
    const [tasks, setTasks] = useState<Task[]>([{name: 'Example Task', completed: false}]);
    const newTaskRef = useRef<HTMLInputElement>(null);

    // Implement an event handler for the add button that adds a new task to the tasks array.
    function addTaskHandler(event: any){
        event.preventDefault() // To prevent page refreshing onClick
        let tName = newTaskRef.current!.value;
        
        // Input Checking
        if (tName === ''){
            alert('Task cannot be empty');
            return;
        }

        // Adding task and clearing input
        setTasks((prevTask) => [...prevTask, {name: tName, completed: false}]);
        newTaskRef.current!.value = '';
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
                return(newTasks);
            }
        );
    }
    
    return(
        <div className={styles.topdiv}>
            {/* // Display an input field and a button to add tasks. */}
            <div className={styles.inputdiv}>
                <label> Input Task: </label>
                {/* <input onChange={taskSaveHandler}/> */}
                <input ref={newTaskRef}/>
                <button onClick={addTaskHandler} className={styles.inputbutton}> Add Task </button>
            </div>
            
            {/* // Display the list of tasks below the input field, showing the task name and a checkbox to mark the task as completed. */}
            <ul className={styles.tasklist}>             
                {tasks.map((t, ind) => {
                    return(
                            <li key={ind} className={styles.taskitem}>
                                <input type="checkbox" onChange={(e: any) => {taskCompleteHandler(t,e)}} checked={t.completed} id={t.name}></input> 
                                
                                {/* // Strikethrough if task is completed */}
                                <label style={{textDecoration: (t.completed? 'line-through' : 'none')}}> {t.name}  </label> 
                                
                                {/* // Add a delete button next to each task that removes the task from the tasks array when clicked. */}
                                 <button onClick={(e: any) => taskDeleteHander(e, ind)}> Remove </button> 
                            </li>
                    )
                })}
            </ul>
        </div>
    )
}


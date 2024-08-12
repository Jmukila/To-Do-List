import React,{useState} from 'react';
function ToDoList()
{
    const [tasks,setTasks]=useState(["Brush Up","Eat Breakfast"]);
    const [newTask,setNewTask]=useState("");
    function handleInputChange(event)
    {
        setNewTask(event.target.value);
    }
    function addTask()
    {
        if(newTask.trim()!=="")
        {
            setTasks(t=>[...tasks,newTask]);
            setNewTask("");
        }
    }
    function deleteTask(index)
    {
        const updatedTasks=tasks.filter((_,i)=>i!==index);
        setTasks(updatedTasks);
    }
    function moveTaskUp(index) {
        if (index > 0 && index < tasks.length) {
            const updatedTasks = [...tasks];
            // Swap the tasks at the current index and the previous index
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
    
            setTasks(updatedTasks);
        }
    }
    
    function moveTaskDown(index) {
        if (index < 0 || index >= tasks.length - 1) {
            // Invalid index or no position to move down
            return;
        }
    
        const updatedTasks = [...tasks];
        // Swap the tasks at the current index and the next index
        [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
    
        setTasks(updatedTasks);
    }
    
    return(<div className="to-do-list">
        <h1>To-Do-List</h1>
        <div>
            <input type="text" placeholder='Enter a task' 
            value={newTask} onChange={handleInputChange}/>
            <button className='add-button' onClick={addTask}>Add Task</button>
        </div>
        <ol>
            {tasks.map((task,index)=>
            <li key={index}>
                <span className='text' >{task} </span>
                <button className='delete-button'
                onClick={()=>{deleteTask(index)}}>Delete Task
                </button>
                <button className='up-button'
                onClick={()=>{moveTaskUp(index)}}>Move Up
                </button>
                <button className='down-button'
                onClick={()=>{moveTaskDown(index)}}>Move Down 
                </button>
            </li>)}
        </ol>
    </div>);
}
export default ToDoList;
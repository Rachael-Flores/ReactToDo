import React, { useState } from "react";

function ToDoList(params) {
    
    const [tasks, setTasks] = useState(['Shower', 'Walk the dog', 'Take out trash']);
    const [newTask, setNewTask] = useState("");
 
    function handleInputChange(event){

    }

    function addTask(){

    }

    function deleteTask(index){

    }
    function moveUp(index) {
        
    }
    function moveDown(index) {
        
    }


    return(
        <div className="to-do-list"> 
        <h1 className="text-9xl">ToDo List</h1>
        <div>
            <input
                // p-5 adds 5 padding units. Jas used p-2.
                className="p-5"
                type="text"
                placeholder="Add a task here."
                value={newTask} 
                onChange={handleInputChange}
            
            ></input>
            <button
            // Changed the button to a Bordered, blue button with margin of 4, denoted by m-4.
            // Original: className="m-2 add-btn bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            className="m-4 add-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            onClick={addTask}>Add ToDo</button>

        </div>
        
        
        
        </div>
    )
    
}

export default ToDoList ; 
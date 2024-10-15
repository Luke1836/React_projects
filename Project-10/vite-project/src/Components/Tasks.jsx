import React from "react";
import NewTasks from "./NewTasks";

function Tasks({ tasks, onAdd, onDelete })
{
    console.log(tasks);
    return (
        <section>
            <h1 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h1>
            <NewTasks onAdd={ onAdd }/>
            { tasks.length === 0 && 
                <p className="text-stone-600 pt-4">
                    This project doesn't have any tasks.
                </p>   
            }
            
            
            { tasks.length > 0 &&
                <ul className="bg-slate-200 px-4 rounded-md mt-2">
                {tasks.map((task) => 
                    <li key={task.id} className="flex flex-row justify-between py-4">
                        <span className="text-stone-500">{ task.text }</span>
                        <button 
                            className="text-stone-500 hover:text-red-600"
                            onClick={ () => onDelete(task.id) }    
                        >
                            Clear
                        </button>
                    </li>
                )}
                </ul>
            }
        </section>
    )
}

export default Tasks;
import React, { useRef } from "react";
import Input from "./Input";

function NewProject({ onSave })
{
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();

    function handleSave()
    {
        const enteredTitle = titleRef.current.value;
        const enteredeDescription = descriptionRef.current.value;
        const enteredDueDate = dueDateRef.current.value;


        onSave({
            title: enteredTitle,
            description: enteredeDescription,
            dueDate: enteredDueDate
        });
    }

    return (
        <div className="w-[35rem] pt-16">
            <menu className="flex items-center justify-end gap-2">
                <li>
                    <button className= "text-stone-700 px-4 py-1 rounded-sm font-semibold hover:text-stone-100 hover:bg-stone-800 hover:rounded-md">
                        Cancel
                    </button>
                </li>
                <li>
                    <button className="bg-stone-800 text-slate-200 px-4 py-1 rounded-md font-semibold hover:text-stone-800 hover:bg-stone-100"
                    onClick={ handleSave }>
                        Save
                    </button>
                </li>
            </menu>

            <div>
                <Input ref={ titleRef } type="text" label="Title" />
                <Input ref={ descriptionRef } label="Description" textarea />
                <Input ref={ dueDateRef } type="date" label="Due Date" />
            </div>
        </div>
    )
}

export default NewProject;
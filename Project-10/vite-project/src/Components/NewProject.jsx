import React from "react";
import Input from "./Input";

function NewProject()
{
    return (
        <div className="w-[35rem] pt-16">
            <menu className="flex items-center justify-end pr-[1rem] gap-2">
                <li>
                    <button className= "text-stone-700 px-4 py-1 rounded-sm font-semibold hover:text-stone-100 hover:bg-stone-800 hover:rounded-md">
                        Cancel
                    </button>
                </li>
                <li>
                    <button className="bg-stone-800 text-slate-200 px-4 py-1 rounded-md font-semibold hover:text-stone-800 hover:bg-stone-100">
                        Save
                    </button>
                </li>
            </menu>

            <div>
                <Input label="Title" />
                <Input label="Description" textarea />
                <Input label="Due Date" />
            </div>
        </div>
    )
}

export default NewProject;
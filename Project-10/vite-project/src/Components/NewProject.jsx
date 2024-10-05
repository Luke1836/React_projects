import React from "react";
import Input from "./Input";

function NewProject()
{
    return (
        <div className="w-[35rem] pt-16">
            <menu className="flex items-center justify-end pr-[1rem] gap-2">
                <li>
                    <button className= "text-stone-800 px-2 py-1 rounded-sm font-semibold hover:text-violet-900">
                        Cancel
                    </button>
                </li>
                <li>
                    <button className="bg-stone-800 text-slate-200 px-4 py-1 rounded-md font-semibold">
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
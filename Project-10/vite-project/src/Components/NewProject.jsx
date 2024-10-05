import React from "react";
import Input from "./Input";

function NewProject()
{
    return (
        <div>
            <menu>
                <li>
                    <button>
                        Cancel
                    </button>
                </li>
                <li>
                    <button>
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
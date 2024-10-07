import React from "react";
import NewTasks from "./NewTasks";

function Tasks()
{
    return (
        <section>
            <h1 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h1>
            <NewTasks />
            <p className="text-stone-600">
                This project doesn't have any tasks.
            </p>
            <ul></ul>
        </section>
    )
}

export default Tasks;
export default function NewTasks()
{
    return (
        <div className="flex items-center gap-4">
            <input className="w-32 md:w-64 px-2 py-1 text-stone-100 bg-stone-400 border-b-2 rounded-md focus:border-stone-900 focus:outline-none" type="text" />
            <button className="md:px-4 py-1 text-stone-600 rounded-md hover:text-stone-200 hover:bg-stone-600 capitalize">Add Task</button>
        </div>
    )
}
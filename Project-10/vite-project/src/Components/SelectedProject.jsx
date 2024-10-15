import Tasks from "./Tasks";

export default function SelectedProject({ projects, onDelete })
{
    const formattedDate = new Date(projects.dueDate).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',        
    });

    return (
        <div className="w-[12rem] lg:w-[35rem] md:p-16 pt-16 md:w-[32rem] ">
            <header className="pb-4 mb-4 border-b-2 border-stone-400 px-2">
                <div className="flex items-center gap-8">
                    <h1 className="text-3xl font-bold text-stone-600 mb-2 uppercase">{ projects.title }</h1>
                    <button 
                        className="text-stone-200 bg-stone-700 px-4 py-1 rounded-md hover:text-stone-50 hover:bg-stone-900"
                        onClick={ onDelete }    
                    >
                        Delete
                    </button>
                </div>
                
                <p className="mb-4 text-stone-400">{ formattedDate }</p>
                <p className="text-stone-600 whitespace-pre-wrap">{ projects.description }</p>
            </header>
            <Tasks />
        </div>
    )
}
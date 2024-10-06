export default function SelectedProject({ projects, onDelete })
{
    console.log(projects.dueDate)
    const formattedDate = new Date(projects.dueDate).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',        
    });

    return (
        <div className="w-[35rem] pt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-400">
                <div className="flex items-center justify-between">
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


        </div>
    )
}
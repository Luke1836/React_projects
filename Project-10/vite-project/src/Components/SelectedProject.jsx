export default function SelectedProject({ projects })
{
    console.log(projects.dueDate)
    const formattedDate = new Date(projects.dueDate).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',        
    });

    return (
        <div className="w-[35rem] pt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-evenly">
                    <h1 className="text-3xl font-bold text-stone-600 mb-2">{ projects.title }</h1>
                    <button className="text-stone-600 hover:text-stone-950">
                        Delete
                    </button>
                </div>
                
                <p className="mb-4 text-stone-400">{ formattedDate }</p>
                <p className="text-stone-600 whitespace-pre-wrap">{ projects.description }</p>
            </header>


        </div>
    )
}
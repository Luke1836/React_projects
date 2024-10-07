import AddProjectButton from "./AddProjectButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function ProjectsSidebar({ onAddProject, projects, onSelectProject, selectedProjectId })
{
    return (
        <aside className='w-1/3 px-8 py-16 bg-stone-800 text-slate-100 md:w-72 rounded-r-lg'>
            <h2 className='mb-8 font-bold uppercase md:text-xl'>
                Your projects
            </h2>
            <div className="mb-[1rem]">
                <AddProjectButton onClick={ onAddProject }><FontAwesomeIcon icon={faPlus}/> Add Project</AddProjectButton>
            </div>
            <ul >
                { projects.map((project) => {
                    let styles = "w-full text-[1rem] text-left mt-2 hover:bg-stone-600 py-1 px-1 rounded-md pl-2"
                    if(project.id === selectedProjectId)
                        styles += ' text-stone-200 bg-stone-500'
                    else
                        styles += ' text-stone-400'

                    return(
                        <li key={ project.id }>
                            <button 
                                className={ styles }
                                onClick={ () => onSelectProject(project.id)}    
                            >
                                { project.title }
                            </button>
                        </li>
                    )
                })}
            </ul>
        </aside>
    )
}

export default ProjectsSidebar;
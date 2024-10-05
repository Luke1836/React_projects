import AddProjectButton from "./AddProjectButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function ProjectsSidebar({ onSelectProject, projects })
{
    return (
        <aside className='w-1/3 px-8 py-16 bg-stone-800 text-slate-100 md:w-72 rounded-r-lg'>
            <h2 className='mb-8 font-bold uppercase md:text-xl'>
                Your projects
            </h2>
            <div>
                <AddProjectButton onClick={ onSelectProject }><FontAwesomeIcon icon={faPlus}/> Add Project</AddProjectButton>
            </div>
            <ul >
                { projects.map((project) => (
                    <li key={ project.id }>
                        <button className="text-[1rem] text-stone-400 text-center p-2 ">
                            { project.title }
                        </button>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default ProjectsSidebar;
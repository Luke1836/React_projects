import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function ProjectsSidebar()
{
    return (
        <aside className='w-1/3 px-8 py-16 bg-stone-800 text-slate-100 md:w-72 rounded-r-lg'>
            <h2 className='mb-8 font-bold uppercase md:text-xl'>
                Your projects
            </h2>
            <div>
                <button className='px-4 py-2 text-xs md:text-base rounded-md  bg-stone-700 text-stone-400 hover:text-stone-300 hover:bg-stone-500 active:text-stone-200'>
                    <FontAwesomeIcon icon={faPlus}/> Add Project
                </button>
            </div>
        </aside>
    )
}

export default ProjectsSidebar;
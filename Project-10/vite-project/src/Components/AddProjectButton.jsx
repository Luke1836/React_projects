import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default function AddProjectButton()
{
    return (
        <button className='px-4 py-2 text-xs md:text-base rounded-md  bg-stone-700 text-stone-200 hover:text-stone-200 hover:bg-stone-600 active:text-stone-50'>
            <FontAwesomeIcon icon={faPlus}/> Add Project
        </button>
    )
}
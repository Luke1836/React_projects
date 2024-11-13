import NoProjectImage from "../assets/no-projects.png"
import AddProjectButton from "./AddProjectButton"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useContext } from "react";
import { ProjectsContext } from '../handler/project-context.jsx'


export default function NoProjectDisplay()
{
    const ctxValues = useContext(ProjectsContext);
    return (
        <div className="w-2/3 text-center flex flex-col items-center gap-4 justify-center font-serif">
            <img 
                src={NoProjectImage} 
                alt="No projects added"
                className="w-24 h-24  cursor-pointer" 
            />
            <h2 className="text-2xl text-stone-600">
                No Projects Selected
            </h2>
            <p>
                No project selected or get started with a new project.
            </p>
            <AddProjectButton onClick={ ctxValues.handleSelect }><FontAwesomeIcon icon={faPlus}/> Add Project</AddProjectButton>
        </div>
    )
}
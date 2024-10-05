import NoProjectImage from "../assets/no-projects.png"
import AddProjectButton from "./AddProjectButton"

export default function NoProjectDisplay()
{
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
            <AddProjectButton />
        </div>
    )
}
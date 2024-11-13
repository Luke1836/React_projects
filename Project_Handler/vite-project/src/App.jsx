import React, { useContext } from "react";
import ProjectsSidebar from "./Components/ProjectsSidebar";
import { ProjectsContext } from './handler/project-context.jsx'


function App()
{
    const ctxValues = useContext(ProjectsContext);

    return (
        <main className="h-svh py-8 flex gap-8">
          <ProjectsSidebar />
          { ctxValues.chosen }
        </main>
    )
}

export default App;
import React, { useState } from "react";
import ProjectsSidebar from "./Components/ProjectsSidebar";
import NewProject from "./Components/NewProject"
import NoProjectDisplay from "./Components/NoProjectDisplay";
import SelectedProject from "./Components/SelectedProject";
import ProjectProvider from "./handler/project-context";


function App()
{
    return (
      <ProjectProvider>
        <main className="h-svh py-8 flex gap-8">
          <ProjectsSidebar 
              onAddProject={ handleSelect } 
              projects={ projectSelected.projects } 
              onSelectProject={ handleSelectedProject } 
              selectedProjectId={ projectSelected.projectSelectedId }
          />
          { chosen }
        </main>
      </ProjectProvider>

    )
}

export default App;
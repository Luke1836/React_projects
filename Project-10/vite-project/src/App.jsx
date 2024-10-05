import React, { useState } from "react";
import ProjectsSidebar from "./Components/ProjectsSidebar";
import NewProject from "./Components/NewProject"
import NoProjectDisplay from "./Components/NoProjectDisplay";

function App()
{
  const [ projectSelected, setProjectSelected ] = useState({
    projectSelectedId: undefined,
    projects: []
  });

  function handleSelect()
  {
    setProjectSelected(prevState => ({
      ...prevState,
      projectSelectedId: null
    }));
  }

  function handleSave(projectToBeAdded)
  {
    setProjectSelected(prevState => ({
      ...prevState,
      projects: [...prevState.projects, projectToBeAdded],
      id: Math.random(),
      projectSelectedId: undefined  
    }));
  }

  let chosen;
  if( projectSelected.projectSelectedId === undefined ) 
    chosen = <NoProjectDisplay onSelectProject={ handleSelect } />
  else if( projectSelected.projectSelectedId === null )
    chosen = <NewProject onSave={ handleSave } />

  console.log(projectSelected);

    return (
      <main className="h-svh py-8 flex gap-8">
        <ProjectsSidebar onSelectProject={ handleSelect } />
        { chosen }
      </main>
    )
}

export default App;
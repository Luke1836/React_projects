import React, { useState } from "react";
import ProjectsSidebar from "./Components/ProjectsSidebar";
import NewProject from "./Components/NewProject"
import NoProjectDisplay from "./Components/NoProjectDisplay";
import SelectedProject from "./Components/SelectedProject";

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
      projectSelectedId: undefined  
    }));
  }


  function handleCancel()
  {
    setProjectSelected(prevState => ({
      ...prevState,
      projectSelectedId: undefined  
    }));
  }


  function handleSelectedProject( id )
  {
    setProjectSelected(prevState => ({
      ...prevState,
      projectSelectedId: id  
    }));
  }


  let chosen = <SelectedProject projects={ projectSelected.projects } />;

  if( projectSelected.projectSelectedId === undefined ) 
    chosen = <NoProjectDisplay onSelectProject={ handleSelect } />
  else if( projectSelected.projectSelectedId === null )
    chosen = <NewProject onSave={ handleSave } onCancel={ handleCancel } />

  console.log(projectSelected);

    return (
      <main className="h-svh py-8 flex gap-8">
        <ProjectsSidebar 
            onAddProject={ handleSelect } 
            projects={ projectSelected.projects } 
            onSelectProject={ handleSelectedProject }  
        />
        { chosen }
      </main>
    )
}

export default App;
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

  let chosen;
  if( projectSelected.projectSelectedId === undefined ) 
    chosen = <NoProjectDisplay onSelectProject={ handleSelect } />
  else if( projectSelected.projectSelectedId === null )
    chosen = <NewProject />

    return (
      <main className="h-svh py-8 flex gap-8">
        <ProjectsSidebar onSelectProject={ handleSelect } />
        { chosen }
      </main>
    )
}

export default App;
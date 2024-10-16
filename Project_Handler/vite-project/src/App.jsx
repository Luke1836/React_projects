import React, { useState } from "react";
import ProjectsSidebar from "./Components/ProjectsSidebar";
import NewProject from "./Components/NewProject"
import NoProjectDisplay from "./Components/NoProjectDisplay";
import SelectedProject from "./Components/SelectedProject";

function App()
{
  const [ projectSelected, setProjectSelected ] = useState({
    projectSelectedId: undefined,
    projects: [],
    tasks: []
  });

  function handleAddTask( task )
  {
    setProjectSelected(prevState => {
      const taskid = Math.random()
      const newTask = {
        id: taskid,
        projectId: prevState.projectSelectedId,
        text: task
      }

      return {
        ...prevState,
        tasks: [
          newTask,
          ...prevState.tasks
        ]
      }
    })
  }

  function handleDeleteTask( id )
  {
    setProjectSelected(prevState => ({
      ...prevState,
      tasks: prevState.tasks.filter((task) => task.id !== id)
    }))
  }

  function handleSelectedProject( id )
  {
    setProjectSelected(prevState => ({
      ...prevState,
      projectSelectedId: id  
    }));
  }


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


  function handleDeleteProject()
  {
    setProjectSelected(prevState => ({
      ...prevState,
      projectSelectedId: undefined,
      projects: prevState.projects.filter((project) => project.id !== prevState.projectSelectedId)
    }));
  }


  const selectedProject = projectSelected.projects.find(project => project.id === projectSelected.projectSelectedId)

  let chosen = <SelectedProject 
                  projects={ selectedProject } 
                  onDelete={ handleDeleteProject } 
                  onAddTask = { handleAddTask }
                  onDeleteTask = { handleDeleteTask }
                  tasks= { projectSelected.tasks }
                />;

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
            selectedProjectId={ projectSelected.projectSelectedId }
        />
        { chosen }
      </main>
    )
}

export default App;
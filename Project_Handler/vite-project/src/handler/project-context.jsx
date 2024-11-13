import React, { useState, createContext } from "react";
import NewProject from "../Components/NewProject"
import NoProjectDisplay from "../Components/NoProjectDisplay";
import SelectedProject from "../Components/SelectedProject";

// For better auto-completion
export const ProjectsContext = createContext({
    projectSelectedId: undefined,
    projects: [],
    tasks: [],
    handleAddTask: () => {},
    handleDeleteTask: () => {},
    handleSave: () => {},
    handleSelect: () => {},
    handleCancel: () => {},
    handleDeleteProject: () => {},
    handleSelectedProject: () => {},
    chosen: <NoProjectDisplay />,
})


export default function ProjectProvider({ children })
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
      
      const selectedProject = projectSelected.projects.find(
        (project) => project.id === projectSelected.projectSelectedId
      );

      let chosen;
      if (projectSelected.projectSelectedId === undefined) {
          chosen = <NoProjectDisplay />;
      } else if (projectSelected.projectSelectedId === null) {
          chosen = <NewProject />;
      } else {
          chosen = <SelectedProject projects={selectedProject} />; // Default initial value
      }


      const ctxValue = {
        projectSelectedId: projectSelected.projectSelectedId,
        projects: projectSelected.projects,
        tasks: projectSelected.tasks,
        handleAddTask,
        handleDeleteTask,
        handleSave,
        handleSelect,
        handleCancel,
        handleDeleteProject,
        handleSelectedProject,
        chosen,
      }

      return (
        <ProjectsContext.Provider value={ ctxValue }>
          { children }
        </ProjectsContext.Provider>
      )
}
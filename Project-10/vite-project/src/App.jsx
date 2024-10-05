import React from "react";
import ProjectsSidebar from "./Components/ProjectsSidebar";
import NewProject from "./Components/NewProject"
import NoProjectDisplay from "./Components/NoProjectDisplay";

function App()
{
    return (
      <main className="h-svh py-8 flex gap-8">
        <ProjectsSidebar />
        <NoProjectDisplay />
      </main>
    )
}

export default App;
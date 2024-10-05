import React from "react";
import ProjectsSidebar from "./Components/ProjectsSidebar";
import NewProject from "./Components/NewProject"

function App()
{
    return (
      <main className="h-svh py-8 flex gap-8">
        <ProjectsSidebar />
        <NewProject />
      </main>
    )
}

export default App;
import React from "react";
import Header from './Components/Editor.jsx'
import Main from './Components/Sidebar.jsx'
import ReactMde from "react-mde";
import 'react-mde/lib/styles/css/react-mde-all.css';

function App() {
    return (
        <>
            <Header />
            <Main />
        </>
    )
}

export default App;
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import './index.css'
import './Components/background.css'
import Navbar from './Components/navbar.jsx'
import Background from './Components/background.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Background />
    <Navbar />
    <App />
  </React.StrictMode>,
)

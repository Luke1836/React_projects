import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App img=".\Database\Images\mount-vesuvius.jpg" name="Luke Ericsson" occupation="Financial Analyst" salary="200000" />
    <App img=".\Database\Images\mount-vesuvius.jpg" name="George Kurian Thomas" occupation="Chief Finance Officer" salary="800000" />
    <App img=".\Database\Images\mount-vesuvius.jpg" name="Alexis Morgan" occupation="HR" salary="30000" />
    <App img=".\Database\Images\mount-vesuvius.jpg" name="Mike Evergreen" occupation="Portfolio Manager" salary="300000" />
  </React.StrictMode>,
)

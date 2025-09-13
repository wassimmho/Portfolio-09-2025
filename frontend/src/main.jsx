import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
//import Topnav from './Components/Topnav/Topnav.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
  </StrictMode>,
)

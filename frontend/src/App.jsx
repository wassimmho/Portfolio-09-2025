import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import Topnav from './Components/Topnav/Topnav.jsx'
import folder from "./assets/Navbar icons/folder.png"
import starfolder from "./assets/Navbar icons/starfolder.png"
import githubfolder from "./assets/Navbar icons/foldergithub.png"
import projectsfolder from './assets/Navbar icons/folderprojects.png'
function App() {

  return (
    <>
    <div className='mainbody'>
      <nav id='top-nav'>
        <Topnav/>
      </nav>  
      <div className='folders'>
        <img src={folder} alt="" />
        <img src={starfolder} alt="" />
        <img src={githubfolder} alt="" />
        <img src={projectsfolder} alt="" />
      </div>
      <div className='text'>
        <span>Wassim Mouhouche</span>
        <span>Welcome to my portfolio</span>
      </div>
      <div id='bottom-nav'>
        <Navbar/>
      </div>
      </div>
    </>
  )
}

export default App

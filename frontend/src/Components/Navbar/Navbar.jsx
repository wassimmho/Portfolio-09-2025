import React from "react"
import './Navbar.css'
import appletv from '../../assets/Navbar icons/appletv.png'
import appstore from '../../assets/Navbar icons/appstore.png'
import bin from '../../assets/Navbar icons/bin.png'
import calendar from '../../assets/Navbar icons/calendar.png'
import chat from '../../assets/Navbar icons/chat.png'
import contact from '../../assets/Navbar icons/contact.png'
import facetime from '../../assets/Navbar icons/facetime.png'
import finder from '../../assets/Navbar icons/finder.png'
import folder from '../../assets/Navbar icons/folder.png'
import linkdin from '../../assets/Navbar icons/Linkdin.png'
import mail from '../../assets/Navbar icons/mail.png'
import maps from '../../assets/Navbar icons/maps.png'
import notes from '../../assets/Navbar icons/notes.png'
import photos from '../../assets/Navbar icons/photos.png'
import podcast from '../../assets/Navbar icons/podcast.png'
import reminder from '../../assets/Navbar icons/reminder.png'
import safari from '../../assets/Navbar icons/safari.png'
import settings from '../../assets/Navbar icons/settings.png'
import terminal from '../../assets/Navbar icons/terminal.png'














function Navbar(){
    return(
    <>
    <div className="Navbar-container">
        <img src={finder} alt="Finder" className="navbar-icon" />
        <img src={safari} alt="Safari" className="navbar-icon" />
        <img src={mail} alt="Mail" className="navbar-icon" />
        <img src={contact} alt="Contacts" className="navbar-icon" />
        <img src={calendar} alt="Calendar" className="navbar-icon" />
        <img src={notes} alt="Notes" className="navbar-icon" />
        <img src={reminder} alt="Reminders" className="navbar-icon" />
        <img src={maps} alt="Maps" className="navbar-icon" />
        <img src={photos} alt="Photos" className="navbar-icon" />
        <img src={chat} alt="Messages" className="navbar-icon" />
        <img src={facetime} alt="FaceTime" className="navbar-icon" />
        <img src={podcast} alt="Podcasts" className="navbar-icon" />
        <img src={appstore} alt="App Store" className="navbar-icon" />
        <img src={settings} alt="Settings" className="navbar-icon" />
        <img src={terminal} alt="Terminal" className="navbar-icon" />
        <img src={folder} alt="Folder" className="navbar-icon" />
        <img src={bin} alt="Bin" className="navbar-icon" />
        <img src={appletv} alt="Apple TV" className="navbar-icon" />
        <img src={linkdin} alt="LinkedIn" className="navbar-icon" />
    </div>
    </>
    );
}

export default Navbar;
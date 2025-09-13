
import React from "react";
import batterie from "../../assets/topnav icons/battery.100.png"
import switchic from "../../assets/topnav icons/switch.png"
import wifi from "../../assets/topnav icons/wifi.png"
import magniglass from "../../assets/topnav icons/magnifyingglass.png"
import apple from "../../assets/topnav icons/apple.png"
import "./Topnav.css"

function Topnav(){
    const now = new Date()
    return(
        <>
        <div className="top-container">
            <div className="left-nav">
                <img src={apple} alt="" />
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="right-nav">
                <img src={batterie} alt="" />
                <img src={switchic} alt="" />
                <img src={magniglass} alt="" />
                <img src={wifi} alt="" />


                <span> {now.toLocaleDateString("en-Us",{weekday:"short",month:"long",day:"numeric"})}</span>
                <span>{now.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit" , hour12:false})}</span>
            </div>
        </div>
        </>
    )
}
export default Topnav;
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import "./topbar.css"

function Topbar(){
return(
    <div className="topbar">
                   {/* The left side of the topbar */}
        <div className="topbarleft">
            <span className="logo">CairoSocial</span>
        </div>

        {/* the Center of the bar */}
        <div className="topbarcenter"> 
            <div className="searchbar">
                <SearchIcon  className="SearchIcon"/>
                <input  className="searchInput" type="text" placeholder="Search..." />
            </div>
        </div>


        {/* the Right side of the bar */}
        <div className="topbarright">
            <div className="topbarLinks">
                <span className="topbarLink">Home</span>
                <span className="topbarLink">TimeLine</span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <PersonIcon />
                    <span className="topbarIconBadge">1</span>
                </div>

                <div className="topbarIconItem">
                    <ChatIcon />
                    <span className="topbarIconBadge">2</span>
                </div>

                <div className="topbarIconItem">
                    <NotificationsIcon />
                    <span className="topbarIconBadge">3</span>
                </div>
                
            </div>
            <img src="../../assets/1.jpeg" alt="profileImg" className="topbarImg" />
        </div>
    </div>
)
}

export default Topbar;
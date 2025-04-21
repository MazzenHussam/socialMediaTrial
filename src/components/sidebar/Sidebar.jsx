import "./sidebar.css";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import GroupsIcon from '@mui/icons-material/Groups';
import SportsIcon from '@mui/icons-material/Sports';
import CelebrationIcon from '@mui/icons-material/Celebration';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EventIcon from '@mui/icons-material/Event';
import WorkIcon from '@mui/icons-material/Work';
import CloseFriends from "../closeFriends/closeFriends";

import {Users} from "../../dummyData"



function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeedIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <ChatIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Chat</span>
                    </li>
                    <li className="sidebarListItem">
                        <VideoLibraryIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Reels</span>
                    </li>
                    <li className="sidebarListItem">
                        <GroupsIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <SportsIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Sports</span>
                    </li>
                    <li className="sidebarListItem">
                        <CelebrationIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Entertaiment</span>
                    </li>
                    <li className="sidebarListItem">
                        <FavoriteIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Date</span>
                    </li>
                    <li className="sidebarListItem">
                        <EventIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkIcon className="sidebarIcon"/>
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                </ul>

                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                {Users.map((u) => (
                        <CloseFriends key ={u.id} user={u} />
                    ))}

                </ul>
            </div>
            
        </div>
    )
}

export default Sidebar;
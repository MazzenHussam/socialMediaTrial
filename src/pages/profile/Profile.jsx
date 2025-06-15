import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./profile.css";


function Profile() {
return (
    <div >
        
        <Topbar/>
        <div className="Profile">
        <Sidebar />
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                    <img className="profileCoverImg" src="/socialMediaTrial/assets/4.jpeg" alt="Cover picture"/>
                    <img className="profileUserImg" src="/socialMediaTrial/assets/2.jpeg" alt="User picture"/> 
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">Mazen Hussam</h4>
                    <span className="profileInfoDesc">Software Engineer</span>
                </div>
            </div>
            <div className="profileRightBottom">
                <Feed />
                <Rightbar profile/>
            </div>
        </div>
        
        
        </div>
    </div>
)
}

export default Profile;

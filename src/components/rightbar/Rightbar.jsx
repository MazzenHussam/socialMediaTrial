import "./rightbar.css";
import {Users} from "../../dummyData"
import Online from "../online/Online"


function Rightbar({profile}) {
    const HomeRightbar = ()=>{
        return (
            <>
            <div className="birthdayContainer">
                    <img src="../../../public/assets/gift1.jpg" alt="Birthday image" className="birthdayImg" />
                    <span className="birthdayText">
                        <b>Samir Sabry</b> and <b>3 other friends</b> have a birthday today.
                    </span>
                </div>
                <img src="../../../public/assets/ad1.jpg" alt="Ad image" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((u) => (
                        <Online key ={u.id} user={u} />
                    ))}

                </ul>
            </>
        )
    }

    const ProfileRightbar = ()=>{
        return (
            <>
            <h4 className="rightbarTitle">User Information</h4>
            <div className="rightbarInfo">
                
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">New York</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoValue">Egypt</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship</span>
                    <span className="rightbarInfoValue">Married</span>
                </div>
            </div>
            {/* Rightbar Friends list */}
            <h4 className="rightbartitle">User Friends</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img src="../../../public/assets/1.jpeg" alt="User image" className="rightbarFollowingImg"/>
                    <span className="rightbarFollowingName">John Doe</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="../../../public/assets/6.jpg" alt="User image" className="rightbarFollowingImg"/>
                    <span className="rightbarFollowingName">John Doe</span>
                </div>
            
            
                <div className="rightbarFollowing">
                    <img src="../../../public/assets/2.jpeg" alt="User image" className="rightbarFollowingImg"/>
                    <span className="rightbarFollowingName">John Doe</span>
                </div>
            
                <div className="rightbarFollowing">
                    <img src="../../../public/assets/3.jpeg" alt="User image" className="rightbarFollowingImg"/>
                    <span className="rightbarFollowingName">John Doe</span>
                </div>
            
            
                <div className="rightbarFollowing">
                    <img src="../../../public/assets/4.jpeg" alt="User image" className="rightbarFollowingImg"/>
                    <span className="rightbarFollowingName">John Doe</span>
                </div>
            
            
                <div className="rightbarFollowing">
                    <img src="../../../public/assets/5.jpg" alt="User image" className="rightbarFollowingImg"/>
                    <span className="rightbarFollowingName">John Doe</span>
                </div>
            </div>
            
                
            
            </>
        )
    }
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar/> : <HomeRightbar/>}
            </div>
        </div>
    )
}

export default Rightbar;
import "./online.css"

function Online({user}) {
return (
    <div>
<li className="rightbarFriend">
                        <div className="rightbarFriendProfileImgContainer">
                            <img src={user.profilePicture} alt="Profile image" className="rightbarProfileImg"/>
                            <span className="onlineBadge" />
                        </div>
                        <span className="rightbarUsername">{user.username}</span>
                    </li>
    </div>
)
}

export default Online;

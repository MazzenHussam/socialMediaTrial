import "./closeFriends.css"

function CloseFriends({user}) {
return (
    <div>
        <li className="sidebarFriend">
            <img src={user.profilePicture} alt="image" className="sidebarFriendImg" />
            <span className="sidebarFriendName">{user.username}</span>
        </li>
    </div>
)
}

export default CloseFriends;

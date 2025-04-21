import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Users} from "../../dummyData";
import {useState} from "react";


function Post({post}) {
    
    // Find the User that matches the post
    const user= Users.find((u)=>u.id===post.userId);
    const[like,setLike] = useState(post.like);
    const[isLiked,setIsLike] = useState(false);
    const likeHandler =()=>{
        setLike(isLiked ? like -1 : like +1);
        setIsLike(!isLiked)
    }
return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={user.profilePicture} alt="Profile picture" className="postProfileImg" />
                    <span className="postUsername">{user?.username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img src={post.photo} alt="post picture" className="postPicture" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="../../../public/assets/like.png" alt="Like icon" onClick={likeHandler} className="postInteractions" />
                    <img src="../../../public/assets/heart.jpg" alt="Heart icon" onClick={likeHandler} className="postInteractions" />
                    <span className="postLikeCounter">{like} likes</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
)
}

export default Post;

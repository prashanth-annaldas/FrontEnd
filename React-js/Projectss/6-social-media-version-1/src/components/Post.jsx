import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";

function Post({post}){
    const {deletePost} = useContext(PostList);
    return <div className="card post" style={{width: "30rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{post.heading}
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletePost(post.id)}>
                            <MdDelete />
                        </span>
                    </h5>
                    <p className="card-text">{post.body}</p>
                    {post.hashTags.map((tags)=><span key={tags} className="badge text-bg-primary hashTag">{tags}</span>)}
                    <div className="alert alert-success reaction" role="alert">
                        This post has been reacted {post.postReactions} people.
                    </div>
                </div>
            </div>
}

export default Post;
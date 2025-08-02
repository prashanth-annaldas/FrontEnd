import PostList from "./PostList";

function Post({post}){
    return <div className="card post" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{post.heading}</h5>
                    <p className="card-text">{post.body}</p>
                    {post.hashTags.map((tags)=><span class="badge text-bg-primary hashTag">{tags}</span>)}
                </div>
            </div>
}

export default Post;
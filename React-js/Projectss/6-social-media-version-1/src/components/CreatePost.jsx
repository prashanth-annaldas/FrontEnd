import { useContext, useRef } from "react";
import { PostList } from '../store/post-list-store';
import { useNavigate } from "react-router-dom";
function CreatePost(){

    const {addPost} = useContext(PostList);

    const userIdElement = useRef();
    const titleElement = useRef();
    const bodyElement = useRef();
    const reactionsElement = useRef();
    const hashTagsElement = useRef();

    const handleOnSubmit = (event)=>{
        event.preventDefault();
        let userId = userIdElement.current.value;
        let title = titleElement.current.value;
        let body = bodyElement.current.value;
        let reactions = reactionsElement.current.value;
        let hashTag = hashTagsElement.current.value.split(" ");

        userIdElement.current.value = "";
        titleElement.current.value = "";
        bodyElement.current.value = "";
        reactionsElement.current.value = "";
        hashTagsElement.current.value = "";

        addPost(userId,title,body,reactions,hashTag);
    };

    return <form className="createPost" onSubmit={handleOnSubmit}>
                <div className="mb-3">
                    <label htmlFor="userId" className="form-label">User Id</label>
                    <input type="text" ref={userIdElement} className="form-control" id="userId" placeholder="Enter userId"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="postTitle" className="form-label">Post Title</label>
                    <input type="text" ref={titleElement} className="form-control" id="postTitle" placeholder="Title of the post"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="body" className="form-label">Body</label>
                    <textarea type="text" ref={bodyElement} rows="4" className="form-control" id="body" placeholder="About the post.."/>
                </div>
                <div className="mb-3">
                    <label htmlFor="reactions" className="form-label">Reactions</label>
                    <input type="text" ref={reactionsElement} className="form-control" id="reactions" placeholder="HHow many people reacted.."/>
                </div>
                <div className="mb-3">
                    <label htmlFor="postTitle" className="form-label">HashTags</label>
                    <input type="text" ref={hashTagsElement} className="form-control" id="postTitle" placeholder="Enter #HashTags here.."/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
}

export default CreatePost;
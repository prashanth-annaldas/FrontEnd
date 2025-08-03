import { useContext } from 'react';
import Post from './Post'
import {PostList as PostListData} from '../store/post-list-store'
import WelcomeMsg from './WelcomeMsg';

function PostList(){
    const {postList, addInitialPosts} = useContext(PostListData);

    const handleGetPostsClicked = ()=>{
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then((data)=>{
            addInitialPosts(data.posts);
        })
    }

    return <>
            {postList.length === 0 && <WelcomeMsg  onGetPostsClicked = {handleGetPostsClicked}/>}
            {postList.map((post)=>(<Post key = {post.id} post = {post}/>))};
        </>
}

export default PostList;
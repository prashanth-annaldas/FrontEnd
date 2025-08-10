import { useContext, useEffect, useState } from 'react';
import Post from './Post'
import {PostList as PostListData} from '../store/post-list-store'
import WelcomeMsg from './WelcomeMsg';
import LoadingSpinner from './LoadingSpinner'
import { useNavigate } from 'react-router-dom';

function PostList(){
    const {postList, addInitialPosts} = useContext(PostListData);
    const [fetching,setFetching] = useState(false);
    const navigate = useNavigate();
    useEffect(()=>{
        setFetching(true);

        const controller = new AbortController();
        const signal = controller.signal;

        fetch('https://dummyjson.com/posts',{ signal })
            .then(res => res.json())
            .then((data)=>{
                addInitialPosts(data.posts);
                setFetching(false);
            });
            navigate("/");
            return () =>{
                controller.abort();
            }
    },[]);

    return <>
            {fetching && <LoadingSpinner/>}
            {!fetching && postList.length === 0 && <WelcomeMsg/>}
            {!fetching && postList.map((post)=>(<Post key = {post.id} post = {post}/>))};
        </>
}

export default PostList;
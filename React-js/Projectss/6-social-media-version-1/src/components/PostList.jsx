import { useContext, useEffect, useState } from 'react';
import Post from './Post'
import {PostList as PostListData} from '../store/post-list-store'
import WelcomeMsg from './WelcomeMsg';
import LoadingSpinner from './LoadingSpinner'
import { useNavigate } from 'react-router-dom';

function PostList(){
    const {postList, fetching} = useContext(PostListData);
    
    

    return <>
            {fetching && <LoadingSpinner/>}
            {!fetching && postList.length === 0 && <WelcomeMsg/>}
            {!fetching && postList.map((post)=>(<Post key = {post.id} post = {post}/>))};
        </>
}

export default PostList;
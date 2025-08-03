import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList:[],
    addPost:()=>{},
    deletePost:()=>{},
});

const PostListReducer = (currPostList,action)=>{
    let newPostList = currPostList;
    if(action.type === "DELETE_POST"){
        newPostList = currPostList.filter((post)=>(post.id !== action.payload.postId));
    }
    else{
        newPostList = [action.payload, ...currPostList];
    }
    return newPostList;
}

function PostListProvider({children}){
    const [postList,dispatchPostList] = useReducer(PostListReducer,[]);

    const addPost = (userId,title,body,reactions,hashTag)=>{
        dispatchPostList({
            type:"ADD_POST",
            payload:{
            id:Date.now(),
            heading:title,
            body:body,
            postReactions:reactions,
            userId:userId,
            hashTags:hashTag,
            },
        });
    };

    const deletePost = (postId)=>{
        dispatchPostList({
            type:"DELETE_POST",
            payload:{
                postId,
            },
        });
    };

    return <PostList.Provider value={{postList, addPost, deletePost}}>{children}</PostList.Provider>;
}



export default PostListProvider;
import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList:[],
    addPost:()=>{},
    deletePost:()=>{},
});

const PostListReducer = (currPostList,action)=>{
    let newPostList = currPostList;
    if(action.type === "DELETE_POST"){
        newPostList = currPostList.filter((post)=>(post.id !== action.payload.postId))
    }
    return newPostList;
}

function PostListProvider({children}){
    const [postList,dispatchPostList] = useReducer(PostListReducer,DEFAULT_POST_LIST);

    const addPost = ()=>{};

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

const DEFAULT_POST_LIST = [
    {
        id:'1',
        heading:'Going to Ananthagiri Hills',
        body:'I am very enjoyed travelling with my friends',
        postReactions:24,
        hashTags:['Ananthagiri','Hills','Trip'],
    },
    {
        id:'2',
        heading:'Movie',
        body:'I went to Salaar Movie with my friends, we were very much enjoyed the movie.',
        postReactions:56,
        hashTags:['Movie','Salaar','Prabhas'],
    },
]

export default PostListProvider;
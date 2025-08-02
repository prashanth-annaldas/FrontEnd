import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList:[],
    addPost:()=>{},
    deletePost:()=>{},
});

const PostListReducer = (currPostList,action)=>{
    return currPostList;
}

function PostListProvider({children}){
    const [postList,dispatchPostList] = useReducer(PostListReducer,DEFAULT_POST_LIST);

    const addPost = ()=>{};

    const deletePost = ()=>{};

    return <PostList.Provider value={{postList, addPost, deletePost}}>{children}</PostList.Provider>;
}

const DEFAULT_POST_LIST = [
    {
        id:'1',
        heading:'Going to Ananthagiri Hills',
        body:'I am very enjoyed travelling with my friends',
        hashTags:['Ananthagiri','Hills','Trip'],
    },
    {
        id:'2',
        heading:'Movie',
        body:'I went to Salaar Movie with my friends, we were very much enjoyed the movie.',
        hashTags:['Movie','Salaar','Prabhas'],
    },
]

export default PostListProvider;
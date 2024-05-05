import { useReducer, createContext } from "react";

export const PostListStore = createContext({
  postList: [],
  addPost: () => {},
  addInitialPosts: () => {},
  deletePost: () => {},
});
const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_ITITIAL_POSTS") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};

const PostListStoreProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = () => {};
  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_ITITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostListStore.Provider
      value={{ postList, addPost, addInitialPosts, deletePost }}
    >
      {children}
    </PostListStore.Provider>
  );
};

export default PostListStoreProvider;

import Post from "./post";
import { useContext } from "react";
import { PostListStore } from "../store/PostListStore";
import NoPost from "./NoPost";
import { useState } from "react";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListStore);
  const [dataFatched, setDataFatched] = useState(false);
  if (!dataFatched) {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });
    setDataFatched(true);
  }

  const onGetPostClick = () => {};

  return (
    <>
      {postList.length === 0 && <NoPost onGetPostClick={onGetPostClick} />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
export default PostList;

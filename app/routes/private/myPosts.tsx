import React, { useEffect, useState } from "react";
import usePost from "~/hooks/usePost";

const myPosts = () => {
  const [posts, setPosts] = useState<PostDTO[]>([]);
  const { getUserPosts } = usePost();

  useEffect(() => {
    getUserPosts().then((res) => setPosts(res));
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <h1 key={post.id}>post.title</h1>
      ))}
    </div>
  );
};

export default myPosts;

import React, { useEffect, useState } from "react";
import usePost from "~/hooks/usePost";
import type { PostResponseDTO } from "~/types/PostResponseDTO";

const authHome = () => {
  const [posts, setPosts] = useState<PostResponseDTO[]>([]);
  const { getAllPosts } = usePost();

  useEffect(() => {
    getAllPosts().then((res) => setPosts(res));
  }, []);

  return (
    <div className="flex flex-col items-center gap-8 ">
      {posts.map((post) => {
        return (
          <div className="bg-accent rounded-2xl w-[400px] sm:w-[600px] p-5">
            <div className="flex flex-row justify-between">
              <h1 className="text-2xl mb-5">{post.title}</h1>
              <h1 className="text-sm text-gray-300">{post.username}</h1>
            </div>
            <p>{post.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default authHome;

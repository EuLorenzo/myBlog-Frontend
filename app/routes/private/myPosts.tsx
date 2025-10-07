import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import PostCard from "~/components/PostCard";
import { Button } from "~/components/ui/button";
import usePost from "~/hooks/usePost";
import type { PostResponseDTO } from "~/types/PostResponseDTO";

const myPosts = () => {
  const [posts, setPosts] = useState<PostResponseDTO[]>([]);
  const navigate = useNavigate();
  const { getUserPosts, deletePost, updatePost } = usePost();

  useEffect(() => {
    getUserPosts().then((res) => setPosts(res));
  }, []);

  const onDelete = (postId: number) => {
    deletePost(postId);
    setPosts((prev) => [...prev.filter((post) => post.id !== postId)]);
  };

  const onChange = (post: PostDTO) => {
    setPosts((prev) => [...prev.filter((p) => p.id !== post.id), post]);
    updatePost(post);
  };

  return (
    <div className="flex flex-col items-center gap-5">
      {posts.length === 0 && (
        <>
          <h1 className="text-2xl">No posts yet</h1>
          <h2 className="text-xl">Start creating now</h2>
          <Button
            variant={"default"}
            onClick={() => navigate("/app/create-post")}
          >
            Create
          </Button>
        </>
      )}
      {posts &&
        posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            onDelete={onDelete}
            onChange={onChange}
          />
        ))}
    </div>
  );
};

export default myPosts;

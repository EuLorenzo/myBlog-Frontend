import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import PostCard from "~/components/PostCard";
import { Button } from "~/components/ui/button";
import usePost from "~/hooks/usePost";

const myPosts = () => {
  const [posts, setPosts] = useState<PostDTO[]>([]);
  const { getUserPosts } = usePost();
  const navigate = useNavigate();

  useEffect(() => {
    getUserPosts().then((res) => setPosts(res));
  }, []);

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
      {posts && posts.map((post) => <PostCard key={post.id} post={post} />)}
    </div>
  );
};

export default myPosts;

import React, { useState } from "react";
import { toast } from "sonner";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import usePost from "~/hooks/usePost";
import useTokenValue from "~/hooks/useTokenValue";

const createPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { createPost } = usePost();
  const { userId } = useTokenValue();

  const handleSubmit = () => {
    if (!title || !content)
      return toast.error("All fields are required", { duration: 3000 });

    const PostDTO: PostDTO = {
      title,
      content,
      userId: userId ?? 0,
    };

    createPost(PostDTO);
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <h1 className="text-center text-5xl">Let's create a new post</h1>

      <form className="flex flex-col mx-2 mt-5 sm:w-1/3 sm:m-auto sm:mt-10">
        <label className="flex flex-col text-left mb-5 gap-2">
          Title
          <Input
            type="text"
            placeholder="My post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label className="flex flex-col text-left gap-2">
          Content
          <Textarea
            placeholder="My post content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </label>

        <Button
          type="button"
          variant={"outline"}
          className="m-auto mt-10"
          onClick={handleSubmit}
        >
          Create post
        </Button>
      </form>
    </div>
  );
};

export default createPost;

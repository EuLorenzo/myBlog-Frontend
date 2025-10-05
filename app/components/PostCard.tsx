import { Pencil, Trash } from "lucide-react";
import React from "react";
import MyAlertDialog from "./MyAlertDialog";
import usePost from "~/hooks/usePost";

interface PostCardProps {
  post: PostDTO;
}

const PostCard = ({ post }: PostCardProps) => {
  const { deletePost } = usePost();

  const onDelete = () => {
    deletePost(post.id ?? null);
  };

  return (
    <div className="flex flex-row justify-between bg-gray-800 rounded-2xl max-w-[1000px] w-full p-5">
      <h1>{post.title}</h1>
      <div className="flex flex-row gap-6">
        <Pencil className="cursor-pointer transition-colors hover:text-sky-800" />
        <MyAlertDialog
          title={`Are you absolutely sure to delete ${post.title} post ?`}
          description="This action cannot be undone. This will permanently delete your
            post and remove the data from our servers."
          trigger={
            <Trash className="cursor-pointer transition-colors hover:text-destructive" />
          }
          onDelete={onDelete}
        />
      </div>
    </div>
  );
};

export default PostCard;

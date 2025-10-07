import { Pencil, Trash } from "lucide-react";
import React from "react";
import MyAlertDialog from "./MyAlertDialog";
import usePost from "~/hooks/usePost";
import EditCardDialog from "./EditCardDialog";

interface PostCardProps {
  post: PostDTO;
  onDelete: (postId: number) => void;
  onChange: (post: PostDTO) => void;
}

const PostCard = ({ post, onDelete, onChange }: PostCardProps) => {
  return (
    <div className="flex flex-row justify-between bg-gray-800 rounded-2xl max-w-[1000px] w-full p-5">
      <h1>{post.title}</h1>
      <div className="flex flex-row gap-6">
        <EditCardDialog
          post={post}
          trigger={
            <Pencil className="cursor-pointer transition-colors hover:text-sky-800" />
          }
          onChange={onChange}
        />

        <MyAlertDialog
          title={`Are you absolutely sure to delete ${post.title} post ?`}
          description="This action cannot be undone. This will permanently delete your
            post and remove the data from our servers."
          trigger={
            <Trash className="cursor-pointer transition-colors hover:text-destructive" />
          }
          onDelete={() => onDelete(post.id ?? 0)}
        />
      </div>
    </div>
  );
};

export default PostCard;

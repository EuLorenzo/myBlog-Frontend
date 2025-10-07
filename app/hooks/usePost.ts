import React, { useState } from "react";
import api from "~/service/api";
import useTokenValue from "./useTokenValue";
import { toast } from "sonner";
import type { PostResponseDTO } from "~/types/PostResponseDTO";

const usePost = () => {
  const { token, userId } = useTokenValue();
  const [loading, setLoading] = useState(false);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const createPost = (PostDTO: PostDTO) => {
    setLoading(true);

    api
      .post("/post", PostDTO, config)
      .then((res) => {
        toast.success("Post created successfully", { duration: 3000 });
        console.log(res.data);
      })
      .catch((err) => {
        toast.error("Error creating post", { duration: 3000 });
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const updatePost = (PostDTO: PostDTO) => {
    setLoading(true);

    api
      .put(`/post`, PostDTO, config)
      .then((res) => {
        toast.success("Post updated successfully", { duration: 3000 });
        console.log(res.data);
      })
      .catch((err) => {
        toast.error("Error updating post", { duration: 3000 });
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const deletePost = (id: number | null) => {
    setLoading(true);

    api
      .delete(`/post/${id}`, config)
      .then(() => {
        toast.success("Post deleted successfully", { duration: 3000 });
      })
      .catch((err) => {
        toast.error("Error deleting post", { duration: 3000 });
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getUserPosts = async () => {
    setLoading(true);

    try {
      const response = await api.get<PostResponseDTO[]>(
        `/user/posts/${userId}`,
        config
      );

      return response.data;
    } catch (error) {
      console.log(error);

      return [];
    } finally {
      setLoading(false);
    }
  };

  return { loading, createPost, updatePost, deletePost, getUserPosts };
};

export default usePost;

import React, { useState } from "react";
import api from "~/service/api";
import useTokenValue from "./useTokenValue";

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
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getUserPosts = async () => {
    setLoading(true);

    try {
      const response = await api.get<PostDTO[]>(
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

  return { loading, createPost, getUserPosts };
};

export default usePost;

import React, { useState } from "react";
import api from "~/service/api";

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const login = (LoginDTO: LoginDTO) => {
    setLoading(true);

    const response = api
      .post("/auth/login", LoginDTO)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const register = (RegisterDTO: RegisterDTO) => {
    setLoading(true);

    const response = api
      .post("/auth/register", RegisterDTO)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    loading,
    login,
    register,
  };
};

export default useAuth;

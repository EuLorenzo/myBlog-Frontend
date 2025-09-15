import React, { useState } from "react";
import { toast } from "sonner";
import api from "~/service/api";
import useTokenValue from "./useTokenValue";

const useAuth = () => {
  const { setTokenValue } = useTokenValue();
  const [loading, setLoading] = useState(false);
  const login = (LoginDTO: LoginDTO) => {
    setLoading(true);

    const response = api
      .post("/auth/login", LoginDTO)
      .then((res) => {
        console.log(res.data.token);
        setTokenValue(res.data.token);
        toast.success("Login successful", { duration: 3000 });
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
        toast.success("Registration successful", { duration: 3000 });
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

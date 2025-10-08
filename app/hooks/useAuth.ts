import React, { useState } from "react";
import { toast } from "sonner";
import api from "~/service/api";
import useTokenValue from "./useTokenValue";

const useAuth = () => {
  const { setTokenValue, setUserIdValue } = useTokenValue();
  const [loading, setLoading] = useState(false);
  const login = (LoginDTO: LoginDTO) => {
    setLoading(true);

    const response = api
      .post("/auth/login", LoginDTO)
      .then((res) => {
        setTokenValue(res.data.token);
        setUserIdValue(res.data.userId.toString());
        return "Login successful";
      })
      .catch((err) => {
        console.log("Login failed: " + err.response.data);
        throw new Error("Login failed: " + err.response.data);
      })
      .finally(() => {
        setLoading(false);
      });

    return response;
  };

  const register = (RegisterDTO: RegisterDTO) => {
    setLoading(true);

    const response = api
      .post<void>("/auth/register", RegisterDTO)
      .then(() => {
        console.log("Registration successful");
        return "Registration successful";
      })
      .catch((err) => {
        console.log("Registration failed" + err.response.data);
        throw new Error("Registration failed: " + err.response.data);
      })
      .finally(() => {
        setLoading(false);
      });

    return response;
  };

  return {
    loading,
    login,
    register,
  };
};

export default useAuth;

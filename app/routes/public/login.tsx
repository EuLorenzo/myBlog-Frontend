import React from "react";
import { toast } from "sonner";
import { LoginCard } from "~/components/LoginCard";
import useAuth from "~/hooks/useAuth";

const login = () => {
  const { login } = useAuth();

  const onSubmit = (username: string, password: string) => {
    if (!username || !password) {
      toast.error("Fill in all fields", { duration: 3000 });
      return;
    }

    const LoginDTO: LoginDTO = {
      username,
      password,
    };

    toast.promise(login(LoginDTO), {
      loading: "Loading...",
      error: (err) => {
        return err.message;
      },
      success: (data) => {
        return data;
      },
    });
  };

  return (
    <div className="">
      <h1 className="text-center text-5xl">Welcome to MyBlog</h1>
      <p className="text-center text-2xl mt-1 mb-5">
        Please login to enjoy the full experience.
      </p>

      <LoginCard handleLogin={onSubmit} />
    </div>
  );
};

export default login;

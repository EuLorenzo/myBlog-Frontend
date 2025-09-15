import React from "react";
import { LoginCard } from "~/components/LoginCard";
import useAuth from "~/hooks/useAuth";

const login = () => {
  const { login } = useAuth();

  return (
    <div className="mt-5">
      <h1 className="text-center text-5xl">Welcome to MyBlog</h1>
      <p className="text-center text-2xl mt-1 mb-5">
        Please login to enjoy the full experience.
      </p>

      <LoginCard handleLogin={login} />
    </div>
  );
};

export default login;

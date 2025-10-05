import React from "react";
import { RegisterCard } from "~/components/RegisterCard";
import useAuth from "~/hooks/useAuth";

const register = () => {
  const { register } = useAuth();

  return (
    <div className="">
      <h1 className="text-center text-5xl">Welcome to MyBlog</h1>
      <p className="text-center text-2xl mt-1 mb-5">
        Sign up to enjoy the full experience.
      </p>

      <RegisterCard handleRegister={register} />
    </div>
  );
};

export default register;

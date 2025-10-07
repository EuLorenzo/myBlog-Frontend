import React from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { RegisterCard } from "~/components/RegisterCard";
import useAuth from "~/hooks/useAuth";
import { validateEmail } from "~/utils/emailValidator";

const register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (email: string, username: string, password: string) => {
    if (!email || !username || !password) {
      toast.error("Fill in all fields", { duration: 3000 });
      return;
    } else if (!validateEmail(email)) {
      toast.error("Invalid email", { duration: 3000 });
      return;
    }

    const RegisterDTO: RegisterDTO = {
      email,
      username,
      password,
    };

    toast.promise(register(RegisterDTO), {
      loading: "Loading...",
      error: (err) => {
        return err.message;
      },
      success: (data) => {
        navigate("/login");
        return data;
      },
    });
  };

  return (
    <div className="">
      <h1 className="text-center text-5xl">Welcome to MyBlog</h1>
      <p className="text-center text-2xl mt-1 mb-5">
        Sign up to enjoy the full experience.
      </p>

      <RegisterCard handleRegister={onSubmit} />
    </div>
  );
};

export default register;

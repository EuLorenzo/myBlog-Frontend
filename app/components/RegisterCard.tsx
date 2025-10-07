import { useState } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { toast } from "sonner";
import { useNavigate } from "react-router";

interface props {
  handleRegister: (RegisterDTO: RegisterDTO) => void;
}

export function RegisterCard({ handleRegister }: props) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = () => {
    if (!email || !username || !password) {
      toast.error("Fill in all fields", { duration: 3000 });
      return;
    }

    const RegisterDTO: RegisterDTO = {
      email,
      username,
      password,
    };

    handleRegister(RegisterDTO);
    navigate("/login");
  };

  return (
    <Card className="w-full max-w-sm m-auto">
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Fill the fields below to create to your account
        </CardDescription>
        <CardAction>
          <Button variant="link" onClick={() => navigate("/login")}>
            Sign in
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="Lord Faarquad"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="********"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button className="w-full cursor-pointer" onClick={onSubmit}>
          Sign up
        </Button>
      </CardFooter>
    </Card>
  );
}

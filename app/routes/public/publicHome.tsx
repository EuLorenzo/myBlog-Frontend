import MyNavigationMenu from "~/components/MyNavigationMenu";
import type { Route } from "./+types/publicHome";

/*export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}*/

export default function publicHome() {
  return (
    <div className="text-center">
      <h1 className="text-5xl">Home</h1>
      <h2 className="text-2xl">Sign in to see the posts</h2>
    </div>
  );
}

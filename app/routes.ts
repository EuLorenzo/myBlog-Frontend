// routes.ts
import { type RouteConfig, layout, route } from "@react-router/dev/routes";

export default [
  layout("./layouts/AuthenticatedLayout.tsx", [
    route("/app", "./routes/private/authHome.tsx"),
    //route("/app/about", "./routes/about.tsx"),
  ]),
  layout("./layouts/UnauthenticatedLayout.tsx", [
    route("/", "./routes/public/publicHome.tsx"),
    route("/login", "./routes/public/login.tsx"),
    route("/register", "./routes/public/register.tsx"),
    route("/about", "./routes/about.tsx"),
  ]),
] satisfies RouteConfig;

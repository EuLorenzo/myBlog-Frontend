import { Link } from "react-router";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "./ui/navigation-menu";

const menuItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Login",
    href: "/login",
  },

  {
    label: "Register",
    href: "/register",
  },
  {
    label: "About",
    href: "/about",
  },
];

const MyNavigationMenu = () => {
  return (
    <NavigationMenu className="m-auto mt-3">
      <NavigationMenuList className="gap-10">
        {menuItems.map((item) => (
          <NavigationMenuItem key={item.label}>
            <Link to={item.href}>
              <NavigationMenuLink>{item.label}</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default MyNavigationMenu;

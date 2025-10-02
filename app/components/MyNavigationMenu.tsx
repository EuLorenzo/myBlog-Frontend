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
import useTokenValue from "~/hooks/useTokenValue";
import { menuItemsAuth, menuItemsNoAuth } from "~/utils/menuItems";

const MyNavigationMenu = () => {
  const { token } = useTokenValue();

  const links = token ? menuItemsAuth : menuItemsNoAuth;

  return (
    <NavigationMenu className="m-auto mt-3">
      <NavigationMenuList className="gap-10">
        {links.map((item) => (
          <NavigationMenuItem key={item.label}>
            <NavigationMenuLink asChild>
              <Link to={item.href}>{item.label}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default MyNavigationMenu;

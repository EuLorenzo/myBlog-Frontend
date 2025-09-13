import React from "react";
import { Outlet } from "react-router";
import MyNavigationMenu from "~/components/MyNavigationMenu";

const AuthenticatedLayout = () => {
  return (
    <>
      <MyNavigationMenu />
      <Outlet />
    </>
  );
};

export default AuthenticatedLayout;

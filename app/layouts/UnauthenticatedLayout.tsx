import React from "react";
import { Outlet } from "react-router";
import MyNavigationMenu from "~/components/MyNavigationMenu";

const UnauthenticatedLayout = () => {
  return (
    <>
      <MyNavigationMenu />
      <Outlet />
    </>
  );
};

export default UnauthenticatedLayout;

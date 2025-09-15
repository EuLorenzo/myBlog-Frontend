import React, { useEffect } from "react";
import { Navigate, Outlet, redirect } from "react-router";
import MyNavigationMenu from "~/components/MyNavigationMenu";
import useTokenValue from "~/hooks/useTokenValue";

const UnauthenticatedLayout = () => {
  const { token } = useTokenValue();

  if (token) {
    return <Navigate to={"/app"} replace />;
  }

  return (
    <div className="public-shell">
      <MyNavigationMenu />
      <Outlet />
    </div>
  );
};

export default UnauthenticatedLayout;

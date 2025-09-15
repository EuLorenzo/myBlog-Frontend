import React, { useEffect } from "react";
import { Navigate, Outlet, redirect, useLocation } from "react-router";
import MyNavigationMenu from "~/components/MyNavigationMenu";
import useTokenValue from "~/hooks/useTokenValue";

const AuthenticatedLayout = () => {
  const { token } = useTokenValue();
  const location = useLocation();

  if (!token) {
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  }

  return (
    <div className="app-shell">
      <MyNavigationMenu />
      <Outlet />
    </div>
  );
};

export default AuthenticatedLayout;

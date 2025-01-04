import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks/useAppSelector";
import Header from "../components/Header/Header";

const PrivateRoute: React.FC = () => {
  const { token } = useAppSelector((state) => state.auth);

  if (token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <Header />
      <Outlet />;
    </>
  );
};

export default PrivateRoute;

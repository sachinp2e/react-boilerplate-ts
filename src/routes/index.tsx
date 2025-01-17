import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import PrivateRoute from "./PrivateRoute";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
      <Route path='/' element={<Navigate to={'/dashboard'}/>}/>
        <Route path="/dashboard" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

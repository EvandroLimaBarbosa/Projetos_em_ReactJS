import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Company from "./components/pages/Company";
import OptimizeRoute from "./components/pages/OptimizeRoute";
import Customers from "./components/pages/Customers";
import LoginPage from "./components/pages/Login/LoginPage";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Home/OptimizeRoute" element={<OptimizeRoute />} />
      <Route path="/Home/Customers" element={<Customers />} />
      <Route path="/Home/Company" element={<Company />} />
      <Route path="/Home/Contact" element={<Contact />} />
    </Routes>
  );
}

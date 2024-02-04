import React from "react";
import Admin from "../components/admin/Admin";
import ProductList from "../components/Products/ProductList";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "../pages/ProductsPage";

const MainRoutes = () => {
  const PUBLIC = [
    { link: "/admin", element: <Admin />, id: 1 },
    { link: "/", element: <ProductsPage />, id: 3 },
  ];
  return (
    <Routes>
      {PUBLIC.map((el) => (
        <Route path={el.link} element={el.element} key={el.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;

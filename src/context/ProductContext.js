import { Pagination } from "@mui/material";
import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const productContext = createContext();
export const useProduct = () => useContext(productContext);

const ProductContext = ({ children }) => {
  const API_PRODUCTS = "http://localhost:3000/data";

  const [data, setData] = useState([]);
  const [oneProduct, SetOneProduct] = useState({});

  async function addProduct(newProduct) {
    await axios.post(API_PRODUCTS, newProduct);
  }

  async function readProduct() {
    const { data } = await axios(API_PRODUCTS);
    setData(data);
  }

  async function deleteProduct(id) {
    await axios.delete(`${API_PRODUCTS}/${id}`);
    readProduct();
  }
  async function getOneProduct(id) {
    const { data } = await axios(`${API_PRODUCTS}/${id}`);
    SetOneProduct(data);
    readProduct();
  }
  async function editedProduct(id, editProduct) {
    await axios.patch(`${API_PRODUCTS}/${id}`, editProduct);
  }
  const [page, setPage] = useState(1);
  const itemsPerPage = 2;
  const count = Math.ceil(data.length / itemsPerPage);

  function currentPage() {
    const next = (page - 1) * itemsPerPage;
    const prev = next + itemsPerPage;
    return data.slice(next, prev);
  }
  <Pagination />;

  const values = {
    addProduct,
    readProduct,
    data,
    oneProduct,
    deleteProduct,
    getOneProduct,
    editedProduct,
    count,
    currentPage,
    setPage,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;

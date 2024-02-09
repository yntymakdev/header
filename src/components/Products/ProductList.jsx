import React, { useEffect } from "react";
import { useProduct } from "../../context/ProductContext";
import ProductCard from "./ProductCard";
import BasicPagination from "../Paginarion/Pagination";

const ProductList = () => {
  const { readProduct, data } = useProduct();

  useEffect(() => {
    readProduct();
  }, []);
  console.log(data);
  return (
    <>
      <div className="list">
        {data ? data.map((el) => <ProductCard el={el} />) : <h1>loading...</h1>}
      </div>
      <BasicPagination />
    </>
  );
};

export default ProductList;

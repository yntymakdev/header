import React, { useEffect } from "react";
import { useProduct } from "../../context/ProductContext";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { readProduct, data } = useProduct();

  useEffect(() => {
    readProduct();
  }, []);
  console.log(data);
  return (
    <div>
      {data ? data.map((el) => <ProductCard el={el} />) : <h1>loading...</h1>}
    </div>
  );
};

export default ProductList;

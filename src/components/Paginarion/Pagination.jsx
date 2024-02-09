import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useProduct } from "../../context/ProductContext";

export default function BasicPagination() {
  const { count } = useProduct();
  return <Pagination count={count} />;
}

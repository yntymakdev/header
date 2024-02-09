import { Box } from "@mui/material";
import React, { useState } from "react";
import "./ProductFilter.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { useProduct } from "../../context/ProductContext";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { Link } from "react-router-dom";
const ProductCard = ({ el }) => {
  const { deleteProduct } = useProduct();
  return (
    <Box className="card">
      <img className="card_img" src={el.image} alt="img" />
      <Box className="card_text">
        <h5>{el.name}</h5>
        <h4>{el.type}</h4>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            color: "goldenrod",
            alignItems: "center",
          }}
        >
          <h4>{el.price}</h4>
          <DeleteIcon onClick={() => deleteProduct(el.id)} />
          <Link to={`/edit/${el.id}`}>
            <EditNoteIcon />
          </Link>
        </Box>
      </Box>
      {/* <BasicPagination /> */}
    </Box>
  );
};

export default ProductCard;

import React, { useEffect, useState } from "react";
import UpNavbar from "../Navbar/UpNavbar";
import NavbarTest from "../Navbar/NavbarTest";
import NavbarCarusel from "../Navbar/NavbarCarusel";
import { Box, Button, TextField } from "@mui/material";
import { useProduct } from "../../context/ProductContext";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const { getOneProduct, oneProduct, editedProduct } = useProduct();
  const { id } = useParams();

  const navigate = useNavigate();
  useEffect(() => {
    getOneProduct(id);
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setImage(oneProduct.image);
      setName(oneProduct.name);
      setPrice(oneProduct.price);
      setType(oneProduct.type);
    }
  }, [oneProduct]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState("");

  function handleChange() {
    let newObj = {
      name: name,
      price: price,
      type: type,
      image: image,
    };
    editedProduct(id, newObj);
  }

  return (
    <>
      <UpNavbar />
      <NavbarTest />
      <NavbarCarusel />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "60vh",
        }}
      >
        <Box
          sx={{
            width: "350px",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          <TextField
            onChange={(e) => setName(e.target.value)}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={name}
          />
          <TextField
            onChange={(e) => setPrice(e.target.value)}
            id="outlined-basic"
            label="Price"
            variant="outlined"
            value={price}
          />
          <TextField
            onChange={(e) => setType(e.target.value)}
            id="outlined-basic"
            label="Type"
            variant="outlined"
            value={type}
          />
          <TextField
            onChange={(e) => setImage(e.target.value)}
            id="outlined-basic"
            label="Image"
            variant="outlined"
            value={image}
          />
          <Button
            onClick={() => {
              navigate("/");
              handleChange();
            }}
            sx={{
              background: "#000",
              "&:hover": {
                background: "#000",
              },
              fontWeight: "bold",
            }}
            variant="contained"
          >
            save shouse
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default EditProduct;

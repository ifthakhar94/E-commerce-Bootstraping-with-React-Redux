import React, { useEffect } from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions";
const ProductListing = () => {
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products`)
      .catch((err) => {
        console.log("Error", err);
      });

    dispatch(setProducts(response.data));
  };

  useEffect(() => fetchProducts, []);
  return (
    <div style={{ marginTop: "100px" }}>
      <h2 style={{ textAlign: "center" }}>Our Demo Products!</h2>
      <div className="ui grid container">
        <ProductComponent />
      </div>
    </div>
  );
};

export default ProductListing;

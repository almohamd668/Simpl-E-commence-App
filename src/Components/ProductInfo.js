import React, { useEffect, useState } from "react";
import { useParams } from "../../node_modules/react-router-dom/dist/index";
import Product from "./Product";
import "./ProductInfo.css"
const ProductInfo = () => {
  const {productId} = useParams();
  const apiUrl ="https://fakestoreapi.com/products";
  const [product, setProduct] = useState({});

  useEffect(() => {
   
  fetch(`${apiUrl}/${productId}`)
  .then(res => res.json())
  .then(data => setProduct(data))

  }, [productId]);

  return (
  <div className="info">
    <Product product={product} showButton={false} />
  </div> )
};

export default ProductInfo;

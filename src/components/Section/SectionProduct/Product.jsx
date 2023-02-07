import React, { Fragment } from "react";
import "./Product.css";
import ProductCard from "./ProductCard";

const Product = () => {
  return (
    <Fragment>
      <div className="min-h-fit py-2">
        <ProductCard />
      </div>
    </Fragment>
  );
};

export default Product;

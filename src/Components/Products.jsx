import React from "react";
import { useParams } from "react-router-dom";

const Products = () => {
  // this is  params hook which gives paramater in the url
  const { id } = useParams();
  return (
    <section>
      <h1>Products page </h1>
      <p>Id of the product is {id}</p>
    </section>
  );
};

export default Products;

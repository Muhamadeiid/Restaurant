import React, { useState } from "react";
import Nav from "../NavBar/Nav";
import axios from "axios";
import styles from "./Product.module.css"
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";

const ProductPage = () => {
  let [products, setProducts] = useState([]);
    axios
      .get("https://dummyjson.com/products?limit=99")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err));
  return (
    <>
      <Nav />
      <div className={styles.products}>
        {
        products.map((el) => (
          <div className={styles.product} key={el.id}>
            <img src={el.thumbnail} alt={el.title} />
            <h3>{el.title}</h3>
            <p>{el.description}</p>
            <Link>Show More</Link>
            <button><span>Add to cart</span><IoCartOutline size={15} /></button>
          </div>
        ))
        }
      </div>
    </>
  );
};

export default ProductPage;

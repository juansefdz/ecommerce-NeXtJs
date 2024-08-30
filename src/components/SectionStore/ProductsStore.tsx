// components/ProductList.tsx
import React from "react";
import ProductCard from "./ProductCard";
import styles from "./ProductList.module.css";

export default function ProductList() {
  return (
    <div className={styles.productList}>
      <div className={styles.tabs}>
        <button className={styles.active}>Best seller</button>
        <button>New arrivals</button>
        <button>On Sale</button>
      </div>
      <div className={styles.productsContainer}>
        
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <button className={styles.btnContainer}>Load more</button>
    </div>
  );
}

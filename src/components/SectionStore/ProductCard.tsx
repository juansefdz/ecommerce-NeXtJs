// components/ProductCard.tsx
import React from "react";
import styles from "./ProductCard.module.css";
import Image from "next/image";

export default function ProductCard() {
  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <Image
          src="https://images.napali.app/global/billabong-products/all/default/large/s9cm04bip0_billabong,m_0491_frt1.jpg"
          alt="Product"
          width={250}
          height={250}
          className={styles.productImage}
        />
        <div className={styles.discountLabel}>-33%</div>
        <div className={styles.timer}>1d : 15h : 51m : 37s</div>
      </div>
      <div className={styles.productInfo}>
        <h3>Product Name</h3>
        <p>$19.99</p>
        <div className={styles.colors}>
          <span
            className={styles.colorDot}
            style={{ backgroundColor: "#000" }}
          ></span>
          <span
            className={styles.colorDot}
            style={{ backgroundColor: "#fff" }}
          ></span>
        </div>
      </div>
    </div>
  );
}

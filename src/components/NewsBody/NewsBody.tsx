// components/NewsBody.js
import styles from "./newsBody.module.css";
import Image from "next/image";

export default function NewsBody() {
  return (
    <div className={styles.newsBody}>
      <div className={styles.infoNews}>
        <h1>Summer Escapades</h1>
        <p>Embrace the sun-kissed season with our collection of brexxy</p>
        <button>
          Shop collection
          <img src="./assets/icons/right.png" alt="arrow" />
        </button>
      </div>
      <div className={styles.picNews}>
        <img
          src="https://www.shopjenatang.com/cdn/shop/products/sage-ball-cap-2_1400x.jpg?v=1633305703"
          className={styles.image}
          alt="news"
        />
      </div>
    </div>
  );
}

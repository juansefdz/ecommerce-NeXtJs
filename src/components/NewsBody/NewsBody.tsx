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
          <Image
            src="/assets/icons/right.png"
            alt="arrow"
            width={20}
            height={20}
          />
        </button>
      </div>
      <div className={styles.picNews}>
        <Image
          src="https://www.shopjenatang.com/cdn/shop/products/sage-ball-cap-2_1400x.jpg"
          className={styles.image}
          alt="news"
          width={1400}
          height={1867}
        />
      </div>
    </div>
  );
}

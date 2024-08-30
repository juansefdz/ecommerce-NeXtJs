import styles from "./StoreZone.module.css";
import Image from "next/image";

export default function StoreZone() {
  return (
    <div className={styles.container}>
      <div className={styles.breadcrumbs}>
        <span>Home</span> &gt; <span>Women</span> &gt; <span>women cap</span>
      </div>
      <div className={styles.productSection}>
        <div className={styles.imageGallery}>
          <div className={styles.thumbnails}>
            <Image
              src="https://images.napali.app/global/billabong-products/all/default/large/s9cm04bip0_billabong,m_0491_frt1.jpg"
              alt="Product"
              width={400}
              height={250}
              className={styles.productImage}
            />
            <Image
              src="https://images.napali.app/global/billabong-products/all/default/hi-res/s9cm04bip0_billabong,m_0491_frt2.jpg"
              alt="Product"
              width={400}
              height={250}
              className={styles.productImage}
            />
            <Image
              src="https://images.napali.app/global/billabong-products/all/default/hi-res/s9cm04bip0_billabong,p_0491_frt1.jpg"
              alt="Product"
              width={250}
              height={250}
              className={styles.productImage}
            />
          </div>

          <div className={styles.mainImage}>
            <Image
              src="https://images.napali.app/global/billabong-products/all/default/large/s9cm04bip0_billabong,m_0491_frt1.jpg"
              alt="Product"
              width={400}
              height={400}
              className={styles.productImage}
            />
          </div>
        </div>

        <div className={styles.productDetails}>
          <h1>Billa Bong</h1>
          <p className={styles.bestSeller}>Best seller</p>
          <div className={styles.priceSection}>
            <span className={styles.currentPrice}>$8.00</span>
            <span className={styles.originalPrice}>$10.00</span>
            <span className={styles.discount}>20% OFF</span>
          </div>
          <p className={styles.viewers}>20 people are viewing this right now</p>
          <div className={styles.timer}>
            <span>1 Day : 15 Hours : 51 Mins : 32 Secs</span>
          </div>

          <div className={styles.options}>
            <div className={styles.colorOption}>
              <span>Color: Beige</span>
              <div className={styles.colorCircles}>
                <span className={styles.color1}></span>
                <span className={styles.color2}></span>
                <span className={styles.color3}></span>
              </div>
            </div>

            <div className={styles.sizeOption}>
              <span>Size:</span>
              <div className={styles.sizeButtons}>
                <button className={styles.sizeButton}>S</button>
                <button className={styles.sizeButton}>M</button>
                <button className={styles.sizeButton}>L</button>
                <button className={styles.sizeButton}>XL</button>
              </div>
            </div>
          </div>

          <div className={styles.cartSection}>
            <div className={styles.quantity}>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <button className={styles.addToCart}>Add to cart - $8.00</button>
            <button className={styles.payPalButton}>Buy with PayPal</button>
          </div>
        </div>
      </div>

      <div className={styles.tabs}>
        <div className={styles.tabHeaders}>
          <button className={styles.tabButton}>Description</button>
          <button className={styles.tabButton}>Review</button>
          <button className={styles.tabButton}>Shipping</button>
          <button className={styles.tabButton}>Return</button>
        </div>
        <div className={styles.tabContent}>
          <div className={styles.tabPane}>
            <h2>Description</h2>
            <p>
              This women cap is perfect for summer days. Made with high-quality
              materials, it provides comfort and style.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

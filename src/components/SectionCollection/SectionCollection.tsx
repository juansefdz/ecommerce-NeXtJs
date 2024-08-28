import styles from "./sectionCollection.module.css";
import Image from "next/image";


export default function SectionCollection() {
  return (
    <div className={styles.SectionCollection}>
      <div className={styles.TitleSectionCollection}>
        <h1>SEASON COLLECTION</h1>
        <a href="">view All Categories</a>
      </div>
      <div className={styles.categorySection}>
        <div className={styles.categoryContainer}>
          <Image
            src="https://images.napali.app/global/billabong-products/all/default/large/s9cm04bip0_billabong,m_0491_frt1.jpg"
            alt="woman's"
            width={300}
            height={300}
          />
          <h3>Women&apos;s</h3>
          <p>23 items</p>
        </div>

        <div className={styles.categoryContainer}>
          <Image
            src="https://d1fufvy4xao6k9.cloudfront.net/images/blog/posts/2023/10/hockerty_man_wearing_a_business_casual_outfit_in_a_wedding_wedd_0a96f0cb_2e13_4fc1_922f_898a4ead8e2e.jpg"
            alt="mens"
            width={300}
            height={300}

          />
          <h3>Men&apos;s</h3>
          <p>9 items</p>
        </div>

        <div className={styles.categoryContainer}>
          <Image
            src="https://arkfinejewelry.com/cdn/shop/files/04_20_23_ARK_1525_2med.jpg?v=1685989663"
            alt="Jewelry"
            width={300}
            height={300}
          />
          <h3>Jewelry</h3>
          <p>31 items</p>
        </div>

        <div className={styles.categoryContainer}>
          <Image
            src="https://facts.net/wp-content/uploads/2023/12/19-sneaker-facts-1701796924.jpg"
            alt="Sneakers"
            width={300}
            height={300}
          />
          <h3>Sneakers</h3>
          <p>21 items</p>
        </div>

        <div className={styles.categoryContainer}>
          <Image
            src="https://image.made-in-china.com/202f0j00PwyVviqCyjpl/2023-New-Fashion-Bow-Tie-School-Bags-for-Girls.webp"
            alt="Bags"
            width={300}
            height={300}
          />
          <h3>Bags</h3>
          <p>5 items</p>
        </div>

        <div className={styles.categoryContainer}>
          <Image
            src="https://ae01.alicdn.com/kf/Ha81ecbcb8ca34140a77da03028320c59M/Polarized-magnet-Sunglasses-Women-fashion-metal-Glasses-Frames-For-Optical-Lenses-Woman-high-quality-sun-glasses.jpg"
            alt="Glasses"
            width={300}
            height={300}
          />
          <h3>Glasses</h3>
          <p>14 items</p>
        </div>
      </div>
    </div>
  );
}

import styles from "./sectionCollection.module.css";

export default function SectionCollection() {
  return (
    <div className={styles.SectionCollection}>
      <div className={styles.TitleSectionCollection}>
        <h1>SEASON COLLECTION</h1>
        <a href="">view All Categories</a>
      </div>
      <div className={styles.categorySection}>
        <img
          src="https://images.napali.app/global/billabong-products/all/default/large/s9cm04bip0_billabong,m_0491_frt1.jpg"
          alt="woman's"
        />
        <img
          src="https://d1fufvy4xao6k9.cloudfront.net/images/blog/posts/2023/10/hockerty_man_wearing_a_business_casual_outfit_in_a_wedding_wedd_0a96f0cb_2e13_4fc1_922f_898a4ead8e2e.jpg"
          alt="mens"
        />
        <img
          src="https://arkfinejewelry.com/cdn/shop/files/04_20_23_ARK_1525_2med.jpg?v=1685989663"
          alt="Jewelry"
        />
        <img
          src="https://facts.net/wp-content/uploads/2023/12/19-sneaker-facts-1701796924.jpg"
          alt="Sneakers"
        />
        <img
          src="https://image.made-in-china.com/202f0j00PwyVviqCyjpl/2023-New-Fashion-Bow-Tie-School-Bags-for-Girls.webp"
          alt="Bags"
        />
        <img
          src="https://ae01.alicdn.com/kf/Ha81ecbcb8ca34140a77da03028320c59M/Polarized-magnet-Sunglasses-Women-fashion-metal-Glasses-Frames-For-Optical-Lenses-Woman-high-quality-sun-glasses.jpg"
          alt="Glasses"
        />
      </div>
    </div>
  );
}

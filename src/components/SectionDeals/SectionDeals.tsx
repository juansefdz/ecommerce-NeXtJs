import Styles from "./SectionDeals.module.css";
import Image from "next/image";

export default function SectionDeals() {
  return (
    <div className={Styles.SectionDealsContainer}>
      <div className={Styles.SectionDealsProduct}>
        <Image
          src="https://www.shopjenatang.com/cdn/shop/files/Cropped-Hoodie-Jogger-Black-Set-1_dfe43402-9e16-446d-9c5c-4a97ea16eecb_900x.jpg"
          alt="product"
          width={900}
          height={1200}
          className={Styles.SectionDealsImage}
        />
        <div className={Styles.TextOverlay}>
          <p>UP TO 30% OFF</p>
          <h3>Essential Basics</h3>
          <button className={Styles.ShopButton}>Shop now</button>
        </div>
      </div>
      <div className={Styles.SectionDealsProduct}>
        <Image
          src="https://i.pinimg.com/736x/29/06/8c/29068c4d5871cb0c551d3c68579d9915.jpg"
          alt="product"
          width={900}
          height={1200}
          className={Styles.SectionDealsImage}
        />
        <div className={Styles.TextOverlay}>
          <p>UP TO 30% OFF</p>
          <h3>Athleisure Wear</h3>
          <button className={Styles.ShopButton}>Shop now</button>
        </div>
      </div>
      <div className={Styles.SectionDealsProduct}>
        <Image
          src="https://montyandmoo.com.au/cdn/shop/products/image_5508018c-5ae1-4eca-9a7f-7f511a6f9500_1000x.jpg?v=1659948595"
          alt="product"
          width={900}
          height={1200}
          className={Styles.SectionDealsImage}
        />
        <div className={Styles.TextOverlay}>
          <p>UP TO 30% OFF</p>
          <h3>Seasonal Favorites</h3>
          <button className={Styles.ShopButton}>Shop now</button>
        </div>
      </div>
    </div>
  );
}

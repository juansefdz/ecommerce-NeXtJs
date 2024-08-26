import Image from "next/image";
import styles from "./body.module.css";

export default function Body() {
  return (
    <div className={styles.body}>
      <div className={styles.Bodycontainer}>
        <div className={styles.newsBody}>
          <div className=""></div>
          <div className=""></div>
        </div>
        <div className="SectionCollection"></div>
        <div className="SectionStore"></div>
        <div className="SectionDeals"></div>
        <div className="SectionInfoShiping"></div>
        <div className="SectionMap"></div>
        <div className="SectionBrands">
          <div className="BrandsContainer">
            <Image
              src="https://download.logo.wine/logo/SSENSE/SSENSE-Logo.wine.png"
              alt="SSENSE"
              width={200}
              height={200}
            />
            <Image
              src="https://static.vecteezy.com/system/resources/previews/014/414/664/original/burberry-new-logo-on-transparent-background-free-vector.jpg"
              alt="BURBERRY"
              width={200}
              height={200}
            />
            <Image
              src="https://www.brandemia.org/wp-content/uploads/2011/09/logo_nike_principal.jpg"
              alt="NIKE"
              width={200}
              height={200}
            />
            <Image
              src="https://logos-marques.com/wp-content/uploads/2024/01/Asos-logo.png"
              alt="ASSOS"
              width={200}
              height={200}
            />
            <Image
              src="https://1000marcas.net/wp-content/uploads/2021/05/Pull-Bear-logo.jpg"
              alt="PULL&BEAR"
              width={200}
              height={200}
            />
            <Image
              src="https://www.ezcorporateclothing.com/cdn/shop/collections/logo-gildan.jpg?v=1686933346"
              alt="GILDAN"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

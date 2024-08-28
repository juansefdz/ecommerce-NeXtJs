// Body.js
import styles from "./body.module.css";
import NewsBody from "./NewsBody/NewsBody";
import SectionCollection from "./SectionCollection/SectionCollection";
import ProductsStore from "./SectionStore/ProductsStore";
import SectionDeals from "./SectionDeals/SectionDeals";
import SectionInfoShipping from "./SectionInfoShipping/SectionInfoShipping";
import SectionMap from "./SectionMap/SectionMap";
import SectionBrands from "./SectionBrands/SectionBrands";

export default function Body() {
  return (
    <div className={styles.body}>
      <div className={styles.bodyContainer}>
        <NewsBody />
        <SectionCollection />
        <ProductsStore />
        <SectionDeals />
        <SectionInfoShipping />
        <SectionMap />
        <SectionBrands />
      </div>
    </div>
  );
}

import Image from "next/image";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.offersContainer}>
        <span>
          - Free shipping for standard order over $100 - Free shipping for
          standard order over $100 - Free shipping for standard order over $100
          - Free shipping for standard order over $100 -
        </span>
      </div>
      <div className={styles.navbarContainer}>
        <div className={styles.lenguageContainer}>
          <div className={styles.lenguage}>
            <Image
              src="/assets/icons/usaflag.png"
              alt="flag"
              width={20}
              height={20}
            />
            <span>USD</span>
            <Image
              src="/assets/icons/downRow.png"
              alt="arrow"
              width={24}
              height={24}
            />
          </div>
          <div className={styles.lenguage}>
            English
            <Image
              src="/assets/icons/downRow.png"
              alt="arrow"
              width={24}
              height={24}
            />
          </div>
        </div>
        <div className="logo">
          <Image src="/Ecomus.svg" alt="search" width={300} height={20} />
        </div>

        <div className={styles.icons}>
          <div className={styles.searchContainer}>
            <Image
              src="/assets/icons/search.png"
              alt="search"
              width={24}
              height={24}
            />
            <Image
              src="/assets/icons/user.png"
              alt="user"
              width={24}
              height={24}
            />
            <Image
              src="/assets/icons/heart.png"
              alt="heart"
              width={24}
              height={24}
            />
            <Image
              src="/assets/icons/bag.png"
              alt="bag"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
      <div className={styles.navContainer}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href="#">Home</a>
              <Image
                src={"/assets/icons/downRow.png"}
                alt="arrow"
                width={24}
                height={24}
              />
            </li>
            <li>
              <a href="#">Shop</a>
              <Image
                src={"/assets/icons/downRow.png"}
                alt="arrow"
                width={24}
                height={24}
              />
            </li>
            <li>
              <a href="#">Products</a>
              <Image
                src={"/assets/icons/downRow.png"}
                alt="arrow"
                width={24}
                height={24}
              />
            </li>
            <li>
              <a href="#">Pages</a>
              <Image
                src={"/assets/icons/downRow.png"}
                alt="arrow"
                width={24}
                height={24}
              />
            </li>
            <li>
              <a href="#">Blog</a>
              <Image
                src={"/assets/icons/downRow.png"}
                alt="arrow"
                width={24}
                height={24}
              />
            </li>
            <li>
              <a href="#">Buy now</a>
              <Image
                src={"/assets/icons/downRow.png"}
                alt="arrow"
                width={24}
                height={24}
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

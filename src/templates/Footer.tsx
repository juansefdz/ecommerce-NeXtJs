import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className="logo">
          <Image src="/Ecomus.svg" alt="search" width={300} height={20} />
        </div>
        <div className={styles.info}>
          <ul>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/terms">Terms of Service</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/shipping">Shipping</Link>
            </li>
            <li>
              <Link href="/returns">Returns</Link>
            </li>
          </ul>
        </div>
        <div className={styles.subscribe}></div>
        <div className={styles.social}></div>
        <div className={styles.legal}></div>
      </div>
    </footer>
  );
}

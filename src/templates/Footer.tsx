import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerSection}>
        <div className={styles.footerColumn}>
          <h3 className={styles.logo}>ecomus</h3>
          <p>
            Address: 1234 Fashion Street, Suite 567,
            <br />
            New York, NY 10001
          </p>
          <p>Email: info@fashionshop.com</p>
          <p>Phone: (212) 555-1234</p>
          <Link href="#" passHref>
            <Link href="#" className={styles.direction}>
              Get direction →
            </Link>
          </Link>
          <div className={styles.socialIcons}>
            <Link href="#" passHref>
              <Link href="#">
                <Image
                  src="/assets/icons/facebook.png"
                  alt="Facebook"
                  width={20}
                  height={20}
                />
              </Link>
            </Link>
            <Link href="#" passHref>
              <Link href="#">
                <Image
                  src="/assets/icons/instagram.png"
                  alt="Instagram"
                  width={20}
                  height={20}
                />
              </Link>
            </Link>
            <Link href="#" passHref>
              <Link href="#">
                <Image
                  src="/assets/icons/youtube.png"
                  alt="YouTube"
                  width={20}
                  height={20}
                />
              </Link>
            </Link>
            <Link href="#" passHref>
              <Link href="#">
                <Image
                  src="/assets/icons/tiktok.png"
                  alt="TikTok"
                  width={20}
                  height={20}
                />
              </Link>
            </Link>
            <Link href="#" passHref>
              <Link href="#">
                <Image
                  src="/assets/icons/pinterest.png"
                  alt="Pinterest"
                  width={20}
                  height={20}
                />
              </Link>
            </Link>
          </div>
        </div>
        <div className={styles.footerColumn}>
          <h4>Help</h4>
          <ul className={styles.footerList}>
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
            <li>
              <Link href="#">Returns + Exchanges</Link>
            </li>
            <li>
              <Link href="#">Shipping</Link>
            </li>
            <li>
              <Link href="#">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="#">FAQ&apos;s</Link>
            </li>
            <li>
              <Link href="#">Compare</Link>
            </li>
            <li>
              <Link href="#">My Wishlist</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h4>About us</h4>
          <ul className={styles.footerList}>
            <li>
              <Link href="#">Our Story</Link>
            </li>
            <li>
              <Link href="#">Visit Our Store</Link>
            </li>
            <li>
              <Link href="#">Contact Us</Link>
            </li>
            <li>
              <Link href="#">Account</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h4>Sign Up for Email</h4>
          <p>
            Sign up to get first dibs on new arrivals, sales, exclusive content,
            events and more!
          </p>
          <div className={styles.subscribeForm}>
            <input type="email" placeholder="Enter your email..." />
            <button className={styles.subscribeButton}>Subscribe </button>
          </div>
          <div className="lenguageZone">
            <div>
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
            <div>
              English
              <Image
                src="/assets/icons/downRow.png"
                alt="arrow"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

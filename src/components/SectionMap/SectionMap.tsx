// components/SectionMap.js

import styles from "./sectionMap.module.css";
export default function SectionMap() {
  return (
    <div className={styles.SectionMap}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15866.646371510467!2d-75.56260345!3d6.1760377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4682f6a94a55e3%3A0x7a256710fd4fad69!2sSan%20Lucas%20Plaza!5e0!3m2!1ses!2sco!4v1724802500457!5m2!1ses!2sco"
        width="100%"
        height="400"
        loading="lazy"
      ></iframe>
    </div>
  );
}

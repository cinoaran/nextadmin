import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        {/* <Image src="/logo/aran.png" alt="Logo image" width="170" height="50" /> */}
        <div className={styles.footerLogo}>
          <h1 className={styles.centerLogoText}>0</h1>
          <span className={styles.rightLogoText}>ARAN DESIGN</span>
        </div>
        <div className={styles.copyright}>
          All rights reserved {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
};

export default Footer;

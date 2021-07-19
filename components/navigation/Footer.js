import styles from "../../styles/Nav.module.css";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className={styles.container}>
      <p className={styles.copyright}>
        &copy; {date} Impostore. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

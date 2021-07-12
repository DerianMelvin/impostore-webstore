import styles from "../styles/Header.module.css";

const Header = ({ heading, description }) => {
  return (
    <header className={styles.container}>
      <h1>{heading}</h1>
      <p>{description}</p>
    </header>
  );
};

export default Header;

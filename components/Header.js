import Image from "next/image";
import styles from "../styles/Header.module.css";
import imgDefault from "../public/images/background_home.jpg";

const Header = ({ heading, description, backgroundImage = imgDefault }) => {
  return (
    <header className={styles.container}>
      <Image
        src={backgroundImage}
        alt="background image"
        layout="fill"
        objectFit="cover"
        priority="true"
        className={styles.image}
      />
      <div className={styles.text}>
        <h1>{heading}</h1>
        <p>{description}</p>
      </div>
    </header>
  );
};

export default Header;

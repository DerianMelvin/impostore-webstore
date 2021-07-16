import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Nav.module.css";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import logo from "../../public/logo.png";

const Nav = () => {
  const [displayNav, setDisplayNav] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (!navRef.current?.contains(e.target)) {
        setDisplayNav(false);
      }
    };
    window.addEventListener("click", handleClick);

    return () => window.removeEventListener("click", handleClick);
  }, [displayNav]);

  return (
    <nav className={styles.container}>
      <Link href="/">
        <Image
          src={logo}
          alt="Impostore logo"
          width="140"
          height="30"
          objectFit="contain"
        />
      </Link>

      <div
        className={styles.mobileMenu}
        onClick={() => setDisplayNav((prevState) => !prevState)}
        ref={navRef}
      >
        <HiOutlineMenuAlt3 />
      </div>

      {displayNav && (
        <div className={styles.mobileLinks}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/categories">Categories</Link>
            </li>
          </ul>
        </div>
      )}

      <ul className={styles.links}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/categories">Categories</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

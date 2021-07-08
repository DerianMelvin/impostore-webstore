import Link from "next/link";
import navStyles from "../../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav>
      <ul className={navStyles.container}>
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

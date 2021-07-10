import Link from "next/link";
import { GiTShirt, GiDress, GiLaptop, GiBigDiamondRing } from "react-icons/gi";
import styles from "../../styles/Categories.module.css";

const CategoryList = ({ categories }) => {
  const categoryIcons = [
    <GiLaptop />,
    <GiBigDiamondRing />,
    <GiTShirt />,
    <GiDress />,
  ];

  return (
    <div className={styles.container}>
      {categories.map((category, i) => {
        // Adjust category name for links
        // Replace whitespace with underscore ("_")
        const regex = /\s/ig;
        const categoryLink = category.replace(regex, "_");

        return (
          <Link href={`/category/${categoryLink}`} key={i}>
            <div className={styles.card}>
              <div className={styles.icon}>{categoryIcons[i]}</div>
              <h3 className={styles.title}>{category}</h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default CategoryList;

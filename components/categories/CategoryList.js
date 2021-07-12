import Link from "next/link";
import { GiTShirt, GiDress, GiLaptop, GiBigDiamondRing } from "react-icons/gi";
import styles from "../../styles/Categories.module.css";

const CategoryList = ({ categories }) => {
  const categoryIcons = [
    <GiLaptop key="electronics" />,
    <GiBigDiamondRing key="jewelery" />,
    <GiTShirt key="men's clothing" />,
    <GiDress key="women's clothing" />,
  ];

  const displayCategories = categories.map((category, i) => {
    // Adjust category name for links
    // Replace whitespace with underscore ("_")
    const regex = /\s/gi;
    const categoryLink = category.replace(regex, "_");

    return (
      <Link href={`/category/${categoryLink}`} key={i} passHref>
        <div className={styles.card}>
          <div className={styles.icon}>{categoryIcons[i]}</div>
          <h3 className={styles.title}>{category}</h3>
        </div>
      </Link>
    );
  });

  return <div className={styles.container}>
    {displayCategories}
    </div>;
};

export default CategoryList;

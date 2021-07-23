import Image from "next/image";
import styles from "../../styles/Products.module.css";
import Link from 'next/link';

const ProductList = ({ products }) => {
  return (
    <div className={styles.container}>
      {products.map((product) => {
        return (
          <Link href={`/product/${product.id}`} key={product.id} passHref>
            <div className={styles.card}>
              <Image
                src={product.image}
                alt={product.title}
                width="300"
                height="300"
                priority="true"
              />
              <h3 className={styles.title}>{product.title}</h3>
              <div className={styles.price}>
                <h4>$ {product.price}</h4>
                <h4>USD</h4>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductList;

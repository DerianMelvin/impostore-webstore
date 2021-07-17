import Head from "next/head";
import styles from "../../styles/Products.module.css";
import Image from "next/image";

const details = ({ product }) => {
  return (
    <>
      <Head>
        <title>{`Some Store | ${product.title}`}</title>
      </Head>

      <div className={styles.product}>
        <div className={styles.image}>
          <Image
            src={product.image}
            alt={product.title}
            width="470"
            height="470"
          />
        </div>

        <div className={styles.details}>
          <span>{product.category}</span>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <div className={styles.price}>
            <h4>Price: </h4>
            <h4>$ {product.price} USD</h4>
          </div>
          <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  const ids = products.map((product) => product.id);
  const paths = ids.map((id) => {
    return {
      params: {
        id: id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
};

export default details;

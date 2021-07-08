import Head from "next/head";
import Item from "../components/home/Item";
import homeStyles from '../styles/Home.module.css';

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Some Store | Home</title>
      </Head>

      <div>
        <h1>Made to fit your style</h1>
        <p>Explore our wide range of products</p>
      </div>

      <div className={homeStyles.container}>
        <Item products={products} />
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return { props: { products } };
};

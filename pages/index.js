import Head from "next/head";
import Header from "../components/Header";
import ProductList from "../components/products/ProductList";

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Some Store | Home</title>
      </Head>

      <Header
        heading="Made to fit your style"
        description="Explore our wide range of products"
      />
      <ProductList products={products} />
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return { props: { products } };
};

import Head from "next/head";
import CategoryList from "../components/categories/CategoryList";
import Header from "../components/Header";

const categories = ({ categories }) => {
  return (
    <>
      <Head>
        <title>Some Store | Categories</title>
      </Head>

      <Header
        heading="Pick your favourite stuff"
        description="Find what you need in our selection of categories"
      />
      <CategoryList categories={categories} />
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  const categories = await res.json();

  return { props: { categories } };
};

export default categories;

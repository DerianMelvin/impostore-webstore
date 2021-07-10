import Head from "next/head";
import Header from "../components/home/Header";

const categories = () => {
  return (
    <div>
      <Head>
        <title>Some Store | Categories</title>
      </Head>

      <Header 
        heading="Pick your favourite stuff"
        description="Find what you need in our selection of categories"
      />
      <h1>Categories</h1>
    </div>
  );
};

export default categories;

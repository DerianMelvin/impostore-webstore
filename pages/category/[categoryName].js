import Head from "next/head";
import Header from '../../components/Header'
import ProductList from "../../components/products/ProductList";

const categoryName = ({ products }) => {
  // Get current category of products
  const category = products[0].category;

  return (
    <div>
      <Head>
        <title>{`Some Store | ${category}`}</title>
      </Head>

      <Header
        heading={category}
        description={`Select from our wide selection of ${category}`}
      />
      <ProductList products={products} />
    </div>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  const categories = await res.json();

  const paths = categories.map((category) => {
    return {
      params: {
        categoryName: category,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${params.categoryName}`
  );
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
};

export default categoryName;

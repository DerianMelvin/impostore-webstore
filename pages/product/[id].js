import Head from "next/head";

const details = ({ product }) => {
  return (
    <div>
      <Head>
        <title>{`Some Store | ${product.title}`}</title>
      </Head>

      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <h3>{product.price}</h3>
    </div>
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

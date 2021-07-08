import Image from "next/image";
import homeStyles from "../../styles/Home.module.css";

const Item = ({ products }) => {
  return (
    <>
      {products.map((product) => {
        return (
          <div key={product.id} className={homeStyles.card}>
            <Image src={product.image} alt={product.title} width="300" height="300" />
            <h3 className={homeStyles.title}>{product.title}</h3>
            <h4 className={homeStyles.price}>{product.price} USD</h4>
          </div>
        );
      })}
    </>
  );
};

export default Item;

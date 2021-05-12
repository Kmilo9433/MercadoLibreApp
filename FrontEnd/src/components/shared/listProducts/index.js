import React from "react";
import ProductItem from "../../shared/productItem";
import styles from "./listProducts.module.scss";

const ListProducts = ({ products }) => (
  <ol className={styles.list}>
    {!!products.length &&
      products.map(
        (
          { id, title, picture, price: { amount }, freeShipping, city },
          index
        ) => (
          <ProductItem
            id={id}
            title={title}
            picture={picture}
            key={index}
            city={city}
            freeShipping={freeShipping}
            price={amount}
          />
        )
      )}
    {!products.length && (
      <p>
        No se encontraron resutados para su búsqueda, por favor inténtelo de
        nuevo.
      </p>
    )}
  </ol>
);

export default ListProducts;

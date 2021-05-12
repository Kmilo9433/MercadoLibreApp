import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { get } from "../../../services";
import styles from "./details.module.scss";
import CurrencyFormat from "react-currency-format";

const Details = () => {
  const [productDetail, setProductDetail] = useState();
  const { pathname } = useLocation();

  const isNewProduct = productDetail?.condition === "new" ? "Nuevo - " : "";

  const isPluralQuantity =
    productDetail?.soldQuantity === 1 ? "vendido" : "vendidos";

  useEffect(() => {
    getProductDetail();
  }, []);

  const getProductDetail = async () => {
    try {
      const result = await get(`${pathname}`);
      setProductDetail(result || {});
    } catch (error) {
      console.error(error);
    }
  };

  const handleBuy = (event) => {
    alert("Esta opción no está disponible.");
  };

  return (
    <>
      {productDetail && (
        <div className={styles.detail}>
          <img
            className={styles.picture}
            src={productDetail.picture}
            alt={`Imagen de ${productDetail.title}`}
          />
          <section className={styles.name}>
            <p>
              {isNewProduct}
              {productDetail.soldQuantity} {isPluralQuantity}
            </p>
            <h1>{productDetail.title}</h1>
            <CurrencyFormat
              className={styles.price}
              value={productDetail.price.amount}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
            <button onClick={handleBuy}>Comprar</button>
          </section>

          <section className={styles.description}>
            <h2>Descripción del producto</h2>
            <p>{productDetail.description}</p>
          </section>
        </div>
      )}
    </>
  );
};

export default Details;

import React from "react";
import ShippingImage from "../../../assets/images/shipping.png";
import { useHistory } from "react-router-dom";
import styles from "./productItem.module.scss";
import CurrencyFormat from "react-currency-format";

const ProductItem = ({ id, title, picture, price, city, freeShipping }) => {
  const history = useHistory();
  return (
    <li className={styles.item} onClick={() => history.push(`/items/${id}`)}>
      <img className={styles.image} alt={`imagen de ${title}`} src={picture} />
      <div className={styles.info}>
        <div className={styles.price}>
          <CurrencyFormat
            value={price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
          {freeShipping && (
            <img
              className={styles.icon}
              src={ShippingImage}
              alt="tiene envio gratis"
            />
          )}
        </div>
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.city}>
        <p>{city}</p>
      </div>
    </li>
  );
};

export default ProductItem;

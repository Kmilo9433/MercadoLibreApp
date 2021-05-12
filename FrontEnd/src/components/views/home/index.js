import React, { useEffect, useState } from "react";
import styles from "./home.module.scss";
import logo from "../../../assets/images/logo.png";

const Home = () => {
  return (
    <div className={styles.detail}>
      <h1>Bienvenidos a la aplicación de mercado libre, ¿Qué deseas buscar?</h1>
      <img className={styles.logo} src={logo} alt="Mercado libre" />
    </div>
  );
};

export default Home;

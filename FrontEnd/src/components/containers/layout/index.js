import React from "react";
import Header from "../../shared/header";
import styles from "./layout.module.scss";

const Layout = ({ children }) => (
  <>
    <Header />
    <main className={styles.layout}>{children}</main>
  </>
);

export default Layout;

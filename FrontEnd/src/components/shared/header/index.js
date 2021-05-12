import React, { useState } from "react";
import searchIcon from "../../../assets/images/search-icon.png";
import logo from "../../../assets/images/logo.png";
import { useHistory } from "react-router-dom";

import styles from "./header.module.scss";

const Header = () => {
  const [userInput, setUserInput] = useState();
  const history = useHistory();
  const handleInput = ({ target: { value } }) => setUserInput(value);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userInput && userInput !== undefined)
      history.push({
        pathname: "/items",
        search: `?search=${userInput}`,
      });
  };

  const home = (event) => {
    history.push({
      pathname: "/",
      search: ``,
    });
    document.getElementById("search-form").reset();
  };

  return (
    <header className={styles.header}>
      <div className={styles.search}>
        <img
          className={styles.img}
          src={logo}
          onClick={home}
          alt="Mercado libre"
        />
        <form
          id="search-form"
          role="search"
          className={styles.formStyle}
          onSubmit={handleSubmit}
        >
          <input
            className={styles.field}
            placeholder="Nunca dejes de buscar"
            onChange={handleInput}
          />
          <button className={styles.button} type="submit">
            <img src={searchIcon} alt="Buscar" />
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;

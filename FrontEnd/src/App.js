import React from "react";
import Layout from "./components/containers/layout";
import ProductsResults from "./components/views/productsResults";
import Details from "./components/views/details";
import "./styles/index.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/views/home";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/items">
            <ProductsResults />
          </Route>
          <Route exact path="/items/:id">
            <Details />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;

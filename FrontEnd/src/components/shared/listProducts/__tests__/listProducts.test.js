import React from "react";
import { render } from "@testing-library/react";
import ListProducts from "..";
import { MemoryRouter } from "react-router-dom";

describe("listProducts test", () => {
  test("should render the amount of items", () => {
    const { getAllByRole  } = render(
      <MemoryRouter>
        <ListProducts products={TEST_PRODUCTS} />
      </MemoryRouter>
    );

    const listitems = Array.from(getAllByRole("listitem"));
    expect(listitems.length).toEqual(TEST_PRODUCTS.length);
  });

  test("should render the title items", () => {
    const { getByText } = render(
      <MemoryRouter>
        <ListProducts products={TEST_PRODUCTS} />
      </MemoryRouter>
    );
    
    TEST_PRODUCTS.forEach(({title}) => 
      expect(getByText(title)).toBeTruthy()
    )
    
  });
});

const TEST_PRODUCTS = [
  {
    id: "MLA916755596",
    title:
      "Hidrolavadora Logus Hl-110 De 1400w Con 110bar De Presión Máxima 220v",
    author: 14500081,
    price: {
      amount: 8454,
      currency: "ARS",
      decimals: 0,
    },
    picture: "http://http2.mlstatic.com/D_901406-MLA43036708217_082020-I.jpg",
    condition: "new",
    freeShipping: true,
    city: "Capital Federal",
  },
  {
    id: "MLA883041292",
    title: "Carro Zorra Carretilla Plegable Aluminio Reforzado Hta 90 Kg",
    author: 232700323,
    price: {
      amount: 3998,
      currency: "ARS",
      decimals: 0,
    },
    picture: "http://http2.mlstatic.com/D_653361-MLA43702257295_102020-I.jpg",
    condition: "new",
    freeShipping: false,
    city: "Capital Federal",
  },
  {
    id: "MLA899550528",
    title: "Carro Plegable Hasta 180 Kg Reforzado Zorra Carrito Plegable",
    author: 218012690,
    price: {
      amount: 8289,
      currency: "ARS",
      decimals: 0,
    },
    picture: "http://http2.mlstatic.com/D_751230-MLA44220097929_122020-I.jpg",
    condition: "new",
    freeShipping: false,
    city: "Capital Federal",
  },
  {
    id: "MLA854967409",
    title: "Carro Zorra Plegable Hasta 70 Kg Reforzado",
    author: 499315934,
    price: {
      amount: 3599,
      currency: "ARS",
      decimals: 0,
    },
    picture: "http://http2.mlstatic.com/D_941764-MLA41783079990_052020-I.jpg",
    condition: "new",
    freeShipping: false,
    city: "Buenos Aires",
  },
];

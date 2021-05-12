import fetch from "node-fetch";

const API_URL = "https://api.mercadolibre.com/";

export const get = async (url) => {
  const response = await fetch(`${API_URL}${url}`, {
    method: "GET",
  });

  return response.json();
};

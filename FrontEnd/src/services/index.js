const API_URL = "http://localhost:8082/api";

const HEADERS ={
  'Accept': 'application/json',
  'Content-Type': 'application/json; charset=UTF-8'
};

export const get = async (query) => {
  const response = await fetch(`${API_URL}${query}`, {
    method: "GET",
    headers: HEADERS
  });

  return response.json();
};
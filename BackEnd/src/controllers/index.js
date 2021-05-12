import { get } from "../services";
import { getProductsData, productDetailFormat } from "../utils";

export const getAllProducts = async (req, res) => {
  try {
    let querySearch = "";
    if (req.query) {
      querySearch = req.query.search;
    }
    const response = await get(`sites/MLA/search?q=${querySearch}`);
    const formatedResponse = await getProductsData(response);
    res.status(200).json(formatedResponse);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const response = await get(`items/${id}`);

    const descriptionResponse = await get(`items/${id}/description`);

    const formatedResponse = productDetailFormat(response, descriptionResponse);
    res.status(200).json(formatedResponse);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

const MAX_PRODUCTS_AMOUNT = 4

export const getProductsData = (externalResponse) => {
  if (!externalResponse?.results.length) return [];
  const data = externalResponse.results.slice(0, MAX_PRODUCTS_AMOUNT);
  const categories = externalResponse.available_filters[0].values;
  const formatedData = parseToFrontendRequiredFormat(data, categories);
  return formatedData;
};

const parseToFrontendRequiredFormat = (dataToFormat, categories) => ({
  categories,
  items: dataToFormat.map((product) => productFormat(product)),
});

const productFormat = ({
  id,
  title,
  price,
  currency_id,
  thumbnail,
  condition,
  shipping,
  seller,
  address
}) => ({
  id,
  title,
  author: seller.id,
  price: {
    amount: price,
    currency: currency_id,
    decimals: 0,
  },
  picture: thumbnail,
  condition,
  freeShipping: shipping.free_shipping,
  city: address.state_name
});

export const productDetailFormat = (
  { id, seller_id, title, price, currency_id, thumbnail, sold_quantity, condition, seller_address },
  { plain_text }
) => ({
  author: seller_id,
  title,
  item: {
    id,
  },
  price: {
    amount: price,
    currency: currency_id,
    decimals: 0,
  },
  picture: thumbnail,
  condition,
  soldQuantity: sold_quantity,
  city: seller_address.state.name,
  description: plain_text
});

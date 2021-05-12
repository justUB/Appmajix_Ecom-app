
export const getProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case "Get products request":
      return {
        loading: true,
        products: [],
      };
    case "get products success":
      return {
        products: action.payload,
        loading: false,
      };
    case "get products fail":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getProductDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case "product details request":
      return {
        loading: true,
      };
    case "Get product details success":
      return {
        loading: false,
        product: action.payload,
      };
    case "Get product details fail":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

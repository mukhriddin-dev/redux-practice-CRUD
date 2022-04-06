const initialState = { Shop: [], loading: "false", ShopFilter: [] };

export const reducer = (state = initialState, action) => {

  switch (action.type) {
    
    case "SHOP_LIST":
      return {
        ...state,
        loading: "true"
      };

    case "SHOP_LIST_UPDATE":

      return {
        ...state,
        loading: "false",
        Shop: action.payload
      };

    case "ERROR":
      return {
        ...state,
        loading: "error",
      };

    default:
      return {
        ...state,
      };
  }
};

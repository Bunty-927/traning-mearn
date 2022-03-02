import ProductActionTypes from "./Product.types";

let counter = 0;

const ProductReducer = (currentState = [], action) => {
  switch (action.type) {
    case ProductActionTypes.CREATE_NEW_PRODUCT:
      return [
        ...currentState,
        {
          id: counter++,
          product: action.payload.product,
        },
      ];

    case ProductActionTypes.DELETE_PRODUCT:
      return currentState.filter((product) => product.id !== action.payload.id);

    case ProductActionTypes.EDIT_PRODUCT:
      currentState.map(({ id, product }) => {
        if (id === action.payload.id) {
          product.name = action.payload.product.name;
          product.price = action.payload.product.price;
          product.offerAmount = action.payload.product.offerAmount;
          product.finalPrice = action.payload.product.finalPrice;
          product.seller = action.payload.product.seller;
        }
      });

      return currentState;

    default:
      return currentState;
  }
};

export default ProductReducer;

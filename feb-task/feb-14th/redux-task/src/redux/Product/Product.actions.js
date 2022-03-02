import ProductActionTypes from "./Product.types";

export const createNewProduct = (product) => ({
  type: ProductActionTypes.CREATE_NEW_PRODUCT,
  payload: {
    product,
  },
});

export const editProduct = (id, product) => ({
  type: ProductActionTypes.EDIT_PRODUCT,
  payload: {
    id,
    product,
  },
});

export const deleteProduct = (id) => ({
  type: ProductActionTypes.DELETE_PRODUCT,
  payload: {
    id,
  },
});

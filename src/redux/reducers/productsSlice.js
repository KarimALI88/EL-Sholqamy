import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  products: [],
};

export const productsSlice = createSlice({
  // name of slice
  name: "products",
  initialState,
  // reducer functions
  // بنحط جواها الفانكشنز اللي هتتعامل مع الستور
  reducers: {
    addToProducts: (state,action) => {
        const products = action.payload
        state.products = products
    }
  }
});

export const {addToProducts} = productsSlice.actions
export default productsSlice.reducer
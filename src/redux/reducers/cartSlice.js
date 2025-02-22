import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    {
      image:
        "https://img.youm7.com/ArticleImgs/2022/9/29/69151-%D9%83%D9%81%D8%AA%D8%A9-%D8%A7%D9%84%D8%AD%D8%A7%D8%AA%D9%8A.jpg",
      name: "كفتة",
      description: "4 صوابع وطبق رز ",
      quantity: 5,
      singlePrice: 100,
    },
    {
      image:
        "https://img.youm7.com/ArticleImgs/2022/9/29/69151-%D9%83%D9%81%D8%AA%D8%A9-%D8%A7%D9%84%D8%AD%D8%A7%D8%AA%D9%8A.jpg",
      name: "كفتة",
      description: "4 صوابع وطبق رز ",
      quantity: 5,
      singlePrice: 100,
    },
  ],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.cart = state.cart.filter((item) => item.id !== itemId);
    },
    clearCart: (state) => {
      state.cart = [];
    },
    increaseQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;

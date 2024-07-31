import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  totalItems: localStorage.getItem("totelItems")
    ? JSON.parse(localStorage.getItem("totelItems"))
    : 0,
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    setTotalItems(state, value) {
      state.totalItem = state.totalItem + value.payload;
    },
    resetCart(state, value) {
      // state.totalItem = state.totalItem + value.payload;
    },

    //add to cart
    //remove from cart
    //reset cart
  },
});

export const { setTotalItems, resetCart } = cartSlice.actions;

export default cartSlice.reducer;

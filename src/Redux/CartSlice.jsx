import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
  },

  reducers: {
    addCart: (state, action) => {
      return [state ,action.payload];
    },
    deleteCart: (state, action) => {
      return state.filter((cart) => cart.id !== action.payload);
    },
    updateCart: (state, action) => {
      return state.map((cart) =>
        cart.id === action.payload.id ? action.payload : cart
      );
    },
  },
});

export const { addCart, deleteCart, updateCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

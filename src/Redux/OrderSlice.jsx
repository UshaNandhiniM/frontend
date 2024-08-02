import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
  },
  reducers: {
    getOrder: (state, action) => {
      state.orders = action.payload.map((order) => {
        return {
          id: order._id,
          username: order.username,
          email: order.email,
          address: order.address,
          pickupDate: order.pickupDate,
          phonenumber: order.phonenumber,
          carFuelType: order.carFuelType,
          carBrand: order.carBrand,
          carNumber: order.carNumber,
          productName: order.productName,
          noteDown: order.noteDown,
          price: order.price,
          totalPrice: order.totalPrice,
          paymentStatus: order.paymentStatus,
          status: order.status,
          bookingDate: order.bookingDate,
        };
      });
    },
    createOrder: (state, action) => {
      state.orders.push(action.payload);
    },
    updateOrder: (state, action) => {
      const index = state.orders.findIndex(
        (order) => order.id === action.payload.id
      );
      state.orders[index] = {
        id: action.payload.id,
        username: action.payload.username,
        email: action.payload.email,
        address: action.payload.address,
        pickupDate: action.payload.pickupDate,
        phonenumber: action.payload.phonenumber,
        carFuelType: action.payload.carFuelType,
        carBrand: action.payload.carBrand,
        carNumber: action.payload.carNumber,
        productName: action.payload.productName,
        noteDown: action.payload.noteDown,
        price: action.payload.price,
        totalPrice: action.payload.totalPrice,
        paymentStatus: action.payload.paymentStatus,
        status: action.payload.status,
        bookingDate: action.payload.booking
    }
  },
    deleteOrder: (state, action) => {
      const id = action.payload.id;
      state.orders = state.orders.filter((order) => order.id !== id);
    },
  },
});

export const { getOrder, createOrder, updateOrder, deleteOrder } =
  orderSlice.actions;

export default orderSlice.reducer;

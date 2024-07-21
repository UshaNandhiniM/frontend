import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
  },
  reducers: {
    getUser: (state, action) => {
      state.products = action.payload.map((ele) => {
        return {
          id: ele._id,
          name: ele.name,
          price: ele.price,
          description: ele.description,
          ratings: ele.ratings,
          images: ele.images,
        };
      });
    },
    getUserById: (state, action) => {
      const product = state.products.find((ele) => ele.id === action.payload);
      if (product) {
        return product;
      } else {
        throw new Error("Product not found");
      }
    },
    createUser: (state, action) => {
      state.products.push(action.payload);
    },
    updateUser: (state, action) => {
      const index = state.products.findIndex(
        (ele) => ele.id === action.payload.id
      );
      state.products[index] = {
        id: action.payload.id,
        name: action.payload.name,
        price: action.payload.price,
        description: action.payload.description,
        ratings: action.payload.ratings,
        images: action.payload.images,
      };
    },
    deleteUser: (state, action) => {
      const id = action.payload.id;
      state.products = state.products.filter((ele) => ele.id !== id);
    },
  },
});

export const { getUser, createUser, updateUser, deleteUser } =
  userSlice.actions;

export default userSlice.reducer;

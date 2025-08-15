import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push({ id: Date.now(), name: action.payload, qty: 1 });
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    increaseQty: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item) item.qty++;
    },
    Decreaseqty: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item) item.qty--;
    },
  },
});

export const { addItem, removeItem, increaseQty, Decreaseqty } =
  cartSlice.actions;

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  modal: false,
  profile: false,
  value: [
    {
      id: nanoid(),
      name: "I Phone",
      price: 100000,
      category: "Mobile",
      date: "1-03-2023",
    },
    {
      id: nanoid(),
      name: "Hp Pavilion",
      price: 150000,
      category: "Laptop",
      date: "2-03-2023",
    },
    {
      id: nanoid(),
      name: "smart Tv",
      price: 200000,
      category: "Television",
      date: "3-03-2023",
    },
    {
      id: nanoid(),
      name: "L.G",
      price: 50000,
      category: "Washing Machine",
      date: "3-03-2023",
    },
    {
      id: nanoid(),
      name: "smart Tv",
      price: 200000,
      category: "Television",
      date: "3-03-2023",
    },
  ],
};

export const ProductSlice = createSlice({
  name: "Product",
  initialState,

  reducers: {
    OpenModal: (state, action) => {
      state.modal = action.payload;
    },

    openProfile: (state, action) => {
      state.profile = action.payload;
    },

    AddProduct: (state, action) => {
      state.value.push({ id: nanoid(), ...action.payload });
    },
    RemoveProduct: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
  },
});

export const { OpenModal, AddProduct, RemoveProduct } = ProductSlice.actions;
export const selectModal = (state) => state.Product.modal;
export const data = (state) => state.Product.value;
export default ProductSlice.reducer;

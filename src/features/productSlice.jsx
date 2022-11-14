import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";
const initialState = {
    products:[],
    categories:[],
    currentCategory:null,
    loading: false,
    error: false,
}



export const getCategories = createAsyncThunk(
  "categories", //! actionType
  async(thunkAPI, {rejectWithValue}) =>{
    const url = "https://fakestoreapi.com/products/categories";
    try {
      const {data} = await axios(url);
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue("Categories did not fetched...!!!")
    }
  }
);


export const getProducts = createAsyncThunk(
  "products",
  async(thunkAPI, {rejectWithValue}) =>{
    const url = "https://fakestoreapi.com/products";
    try {
      const {data} = await axios(url);
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue("Products din not fetched...!!!")
    }
  }
)


const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearProductList: (state) => {
      state.products = [];
    },
    setCurrentCategory:(state, {payload})=>{
      state.currentCategory = payload;
    }
  },
  extraReducers:(builder)=>{
    builder
    .addCase(getCategories.pending, (state) =>{
      state.loading= true;
    })
    .addCase(getCategories.fulfilled, (state, {payload}) =>{
      state.categories = payload;
      state.loading = false;
    })
    .addCase(getCategories.rejected, (state) =>{
      state.loading = false;
      state.error = true;
    })
    .addCase(getProducts.pending, (state) =>{
      state.loading= true;
    })
    .addCase(getProducts.fulfilled, (state, {payload}) =>{
      state.products = payload;
      state.loading = false;
    })
    .addCase(getProducts.rejected, (state) =>{
      state.loading = false;
      state.error = true;
    })
  }
});

export const {clearProductList,setCurrentCategory} = productSlice.actions

export default productSlice.reducer
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categoriesService from "services/categories";

const initialState = [];

export const searchCategories = createAsyncThunk(
  "categories/search",
  categoriesService.buscar
);

const categoriesSlice = createSlice({
  name: "categoriesSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(searchCategories.fulfilled, (state, { payload }) => {
      return payload;
    });
  },
});

export default categoriesSlice.reducer;

import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const loadCategories = createAction('categories/getAll')
export const loadCategory = createAction('categories/getOne')

const categoriesSlice = createSlice({
  name: "categoriesSlice",
  initialState,
  reducers: {
    loadAllCategories: (state, { payload }) => {
      return payload
    },
    loadOneCategory: (state, { payload }) => {
      state.push(payload)
    }
  }
});

export const { loadAllCategories, loadOneCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;

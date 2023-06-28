import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const searchItemsListener = createAction('items/getAll')
export const addItem = createAction('items/getOne')

const itemSlice = createSlice({
  name: "itemsSlicer",
  initialState,
  reducers: {
    loadAllItems: (state, { payload }) => {
      return payload
    },
    loadOneItem: (state, { payload }) => {
      state.push(payload)
    },
    changeFavorite: (state, { payload }) => {
      // is not the state of the store
      state.map((item) => {
        if (item.id === payload) item.favorite = !item.favorite;
        return item;
      });
    },
    changeTitle: (state, { payload }) => {
      const index = state.findIndex((item) => item.id === payload.id);
      Object.assign(state[index], { ...payload });
    },
    deleteItem: (state, { payload }) => {
      const index = state.findIndex((item) => item.id === payload);
      state.splice(index, 1);
    },
  },
});

export const { changeFavorite, loadAllItems, loadOneItem, changeTitle, deleteItem } =
  itemSlice.actions;

export default itemSlice.reducer;

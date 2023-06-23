import { createStandaloneToast } from "@chakra-ui/toast";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import itemsService from "services/items";

const { toast } = createStandaloneToast();

const initialState = [];

export const searchItems = createAsyncThunk(
  "items/search",
  itemsService.search
);

const itemSlice = createSlice({
  name: "itemsSlicer",
  initialState,
  reducers: {
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
  extraReducers: (builder) => {
    builder
      .addCase(searchItems.fulfilled, (state, { payload }) => {
        toast({
          title: 'Sucesso!',
          description: 'Itens carregadas com sucesso!',
          status: 'success',
          duration: 2000,
          isClosable: true
        })
        return payload;
      })
      .addCase(searchItems.pending, (state, { payload }) => {
        toast({
          title: 'Carregando!',
          description: 'Carregando items...',
          status: 'loading',
          duration: 2000,
          isClosable: true
        })
      })
      .addCase(searchItems.rejected, (state, { payload }) => {
        toast({
          title: 'Erro',
          description: 'Erro na busca de items',
          status: 'error',
          duration: 2000,
          isClosable: true
        })
      });
  },
});

export const { changeFavorite, addItem, changeTitle, deleteItem } =
  itemSlice.actions;

export default itemSlice.reducer;

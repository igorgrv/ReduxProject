import categoriesService from "services/categories";
import { loadAllCategories, loadOneCategory, loadCategories, loadCategory } from "store/reducers/categories";
import createTask from "./utils/createTask";

const { createListenerMiddleware } = require("@reduxjs/toolkit");

export const categoryListener = createListenerMiddleware();

categoryListener.startListening({
  actionCreator: loadCategories,
  effect: async (action, { dispatch, fork, unsubscribe }) => {
    const response = await createTask({
      fork,
      dispatch,
      action: loadAllCategories,
      service: categoriesService.getCategories,
      textLoading: 'Loading categories',
      textSuccess: 'Categories loaded with success!',
      textError: 'Error while trying to load categories',
    });
    if (response.status === 'ok')
      unsubscribe();

  }
})

categoryListener.startListening({
  actionCreator: loadCategory,
  effect: async (action, { dispatch, fork, getState }) => {
    
    const { categories } = getState();
    const categoryId = action.payload

    const alreadyHasCategory = categories.some(category => category.id === categoryId)

    if (alreadyHasCategory) return;

    await createTask({
      fork,
      dispatch,
      action: loadOneCategory,
      service: () => categoriesService.getCategory(categoryId),
      textLoading: `Loading category ${categoryId}`,
      textSuccess: `Category ${categoryId} loaded with success!`,
      textError: `Error while trying to load ${categoryId}`,
    });
  }
})
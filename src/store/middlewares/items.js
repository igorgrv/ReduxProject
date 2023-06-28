import itemsService from "services/items";
import { loadAllItems, searchItemsListener } from "store/reducers/items";
import createTask from "./utils/createTask";
import { loadCategory } from "store/reducers/categories";

const { createListenerMiddleware } = require("@reduxjs/toolkit");

export const itemListener = createListenerMiddleware();

itemListener.startListening({
  actionCreator: loadCategory,
  effect: async (action, { dispatch, fork, getState }) => {

    const categoryName = action.payload
    const { items } = getState();

    const hasItemAlreadyLoad = items.some(item => item.category === categoryName);

    if (hasItemAlreadyLoad) return;

    await createTask({
      fork,
      dispatch,
      action: loadAllItems,
      service: () => itemsService.getItemByCategory(categoryName),
      textLoading: `Loading items from ${categoryName}`,
      textSuccess: `Items from ${categoryName} loaded with success!`,
      textError: `Error while trying to load items from ${categoryName}`,
    });
  }
})
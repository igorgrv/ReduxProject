import api from "common/config/api";

const itemsService = {
  getItems: async () => {
    const result = await api.get("/items");
    return result.data;
  },
  getItemByCategory: async (categoryName) => {
    const result = await api.get(`/items?category=${categoryName}`);
    return result.data;
  }
};

export default itemsService;

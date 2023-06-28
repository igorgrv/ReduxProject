import api from "common/config/api";

const categoriesService = {
  getCategories: async () => {
    const result = await api.get("/categories");
    return result.data;
  },
  getCategory: async (categoryName) => {
    const result = await api.get(`/categories/${categoryName}`);
    return result.data;
  },
};

export default categoriesService;

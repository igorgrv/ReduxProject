import api from "common/config/api";

const categoriesService = {
  buscar: async () => {
    const results = await api.get("/categories");
    return results.data;
  },
};

export default categoriesService;

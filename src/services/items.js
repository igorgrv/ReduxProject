import api from "common/config/api";

const itemsService = {
  search: async () => {
    const result = await api.get("/items");
    return result.data;
  },
};

export default itemsService;

import { Api } from "services/api";

const apiInstance = new Api();

export const authApi = () => ({
  login: async (name: string, email: string) => {
    return apiInstance.post("/auth/login", { name, email });
  },

  logout: async () => {
    return apiInstance.get("/auth/logout");
  }
})
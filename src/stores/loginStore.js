import { defineStore } from "pinia";
import axios from "axios";

export const defineLoginStore = () => {
  const token = ref(null);

  const login = async ({ username, password }) => {
    const response = await axios.post("/api/login", { username, password });
    token.value = response.data.token;
  };

  const logout = () => {
    token.value = null;
  };

  return {
    token,
    login,
    logout,
  };
};

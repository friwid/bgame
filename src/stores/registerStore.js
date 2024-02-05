import { defineStore } from "pinia";
import axios from "axios";

export const defineRegisterStore = () => {
  const isRegistered = ref(false);

  const register = async ({ username, email, password }) => {
    await axios.post("/api/register", { username, email, password });
    isRegistered.value = true;
  };

  return {
    isRegistered,
    register,
  };
};
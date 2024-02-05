import { defineStore } from "pinia";
import axios from "axios";

export const defineLoginStore = () => {
  const token = ref(null);

  const login = async ({ username, password }) => {

    // use bcrypt
    const passwordHash = await Bun.password.hash(password, {
      algorithm: "bcrypt",
      cost: 4, // number between 4-31
    });

    const response = await axios.post("/api/login", { username, passwordHash });
    token.value = response.data.token;

    //TODO: Check password against stored hash in database: const isMatch = await Bun.password.verify(password, hash);
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

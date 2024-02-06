/* This code is probably obsolete */

import { defineStore } from "pinia";
import axios from "axios";

export const defineRegisterStore = () => {
  const isRegistered = ref(false);

  const register = async ({ username, email, password }) => {

    // use bcrypt
    const passwordHash = await Bun.password.hash(password, {
      algorithm: "bcrypt",
      cost: 4, // number between 4-31
    });

    await axios.post("/api/register", { username, email, passwordHash });
    isRegistered.value = true;
  };

  return {
    isRegistered,
    register,
  };
};
import { defineStore } from "pinia";

const hashPassword = async function (password) {
  await Bun.password.hash(password, {
    algorithm: "bcrypt",
    cost: 4, // number between 4-31
  });
};

export const authStore = defineStore("auth", {
  state: () => ({
    user: null,
  }),
  actions: {
    async login(username, password, isRememberMe) {},
    hashPassword(password) {
      return hashedPassword;
    },
  },
});

import { useLoginStore } from "./stores/login";

export const useLoginController = {
  setup() {
    const { login } = useLoginStore();

    const handleLogin = () => {
      const username = this.username;
      const password = this.password;

      login({ username, password });
    };

    return {
      handleLogin,
    };
  },
};
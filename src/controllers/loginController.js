import { useLoginStore } from "./stores/login";

export const LoginController = {
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
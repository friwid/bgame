import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const authFetch = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  headers: {
    Accept: "application/json",
  },
});

export const login = async (e, formData) => {
  const username = formData.username;
  const password = formData.password;
  const isRememberMe = formData.isRememberMe;

  try {
    const resp = await authFetch.post("/", {
      username,
      password,
      isRememberMe,
    });
    console.log("api.js resp.data: " + resp.data);
  } catch (error) {
    console.error(error);
  }
};

// const { username, email, password, status, error } = useRegisterController();
// const { email, password, login, isLoggedIn, status, error } = useLoginController();

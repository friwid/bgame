import { createApp } from "vue";
import App from "./App.vue";

import "./main.css";

import $bus from "./utils/events.js";
import $pages from "./data.js";
//import axios from "axios";
//floating-ui
import { createPinia } from "pinia";
import router from "./routes/routes.js";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import * as styles from "vuetify/styles";
import colors from "vuetify/util/colors";
import '@fortawesome/fontawesome-free/css/all.css' 
import { aliases, fa } from 'vuetify/iconsets/fa'

const vuetify = createVuetify({
  defaults: {
    global: {
      ripple: false,
    },
  },
  components,
  directives,
  styles,
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
    },
  },
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: colors.pink.darken4,
          secondary: colors.pink.lighten1, 
        }
      },
    },
  },
});

const pinia = createPinia();

const app = createApp(App);

const env = import.meta.env;
const isDev =
  env.DEV &&
  !env.PROD &&
  env.MODE === "development" &&
  env.VITE_USER_NODE_ENV === "development" &&
  env.VITE_ENV_DEBUG === ".env.development";

isDev ? console.table(env) : console.error("--------NOT IN DEV MODE!--------");

app.use(router);
app.use(pinia);
app.use(vuetify);

app.provide("$bus", $bus);
app.provide("$pages", $pages);

app.mount("#app");

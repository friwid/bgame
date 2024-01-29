import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import $bus from "./utils/events.js";
import router from "./routes.js";
import $pages from "./data.js";
//import express from "express";
//import axios from "axios";
import { createPinia } from 'pinia';

const pinia = createPinia();

const app = createApp(App);

const env = import.meta.env;
(env.DEV 
  && !env.PROD 
  && env.MODE === "development" 
  && env.VITE_MODE === "development" 
  && env.VITE_USER_NODE_ENV === "development" 
  && env.VITE_ENV_DEBUG === ".env.development") ? console.table(env) : console.error("--------NOT IN DEV MODE!--------"
);

console.log("Test: " + env.SERVER_DEBUG);


app.use(router);
app.use(pinia);

app.provide("$bus", $bus);
app.provide("$pages", $pages);

app.mount("#app");

import express from "express";
import morgan from "morgan";

const app = express();

//Register view engine
app.set("vie engine", "ejs");

//Middleware and static files
app.use(express.static("public"));
app.use(morgan('dev'));


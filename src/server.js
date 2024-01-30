import express from "express";
import morgan from "morgan";
//import path from "path";

const app = express();

// Set directory to contain the templates ('views')
//app.set("views", path.join(__dirname, "views"));

//Register view engine
// app.set("vie engine", "ejs");

//Middleware and static files
//app.use(express.static("public"));
app.use(morgan('dev'));


app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
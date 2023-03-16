import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { userRouter } from "./routes/users.js";
import { recipesRuter } from "./routes/recipes.js";


const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRuter);


mongoose.connect(
  "mongodb+srv://YUMM-RECIPES:9zGlIyWDydxgV9ot@recipes.m90lrvx.mongodb.net/recipes?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.listen(3001, () => console.log("SERVER IS RUNNING!"));

import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import router from "./routes/TodoRoute.js";

const app = express();
const port = process.env.port || 4000;

// mongoDB connect
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log(`Connected to mongoDB`);
  })
  .catch((err) => {
    console.log(`Failed to connect with db ${err}`);
  });

app.use(router);
app.listen(port, () => console.log(`port is listening on ${port}`));

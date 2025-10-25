import express from "express";
import "dotenv/config";
import { configDotenv } from './node_modules/dotenv/lib/main.d';

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

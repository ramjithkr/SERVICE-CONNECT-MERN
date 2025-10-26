import express from "express";
import "dotenv/config";
import apiRouter from "./src/routesApi/indexApi.js";
import { connectDb } from "./src/config/Database.js";

const app = express();

connectDb();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "Server is running" });
});

app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

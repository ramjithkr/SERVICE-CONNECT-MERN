import express from "express";
import "dotenv/config";
import apiRouter from "./src/routes/apiIndex.js"
const app = express();

const port = process.env.PORT || 3000;

app.use("/api",apiRouter)

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

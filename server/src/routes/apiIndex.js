import express from "express";
import V1Router from "./v1/v1Index.js";

const apiRouter = express.Router();

apiRouter.use("/v1", V1Router);

export default apiRouter;

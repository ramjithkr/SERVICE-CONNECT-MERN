import express from "express";
import v1Router from "./v1/indexV1.js";

const apiRouter = express.Router();

// test route
apiRouter.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "index Api running" });
});

apiRouter.use("/v1", v1Router);

export default apiRouter;

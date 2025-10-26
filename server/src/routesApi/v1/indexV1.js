import express from "express";
// import userRouter from "./userRouter.js";
import authRouter from "./authRoute.js";

const v1Router = express.Router();

//test route
v1Router.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "Index v1 Running" });
});

//routes
// v1Router.use("/user", userRouter);
v1Router.use("/auth", authRouter);

//
export default v1Router;

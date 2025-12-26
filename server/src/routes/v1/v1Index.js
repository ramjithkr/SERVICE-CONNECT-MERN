import express from "express";
import authRouter from "./authRouter.js"
// import userRouter from "./userRouter.js"

const V1Router = express.Router();

V1Router.use("/auth",authRouter)
// V1Router.use("/user",userRouter)

export default V1Router;

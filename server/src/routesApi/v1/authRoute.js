import express from "express";
import { userRegister } from "./../../controllers/authController.js";
const authRouter = express.Router();

//test route
authRouter.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "Auth Router Running" });
});

authRouter.post("/login", userRegister);

export default authRouter;

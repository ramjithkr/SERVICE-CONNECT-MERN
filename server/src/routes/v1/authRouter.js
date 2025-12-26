import express from "express";
import {
  userAuthLogin,
  userAuthLogout,
  userAuthRegister,
} from "../../controllers/authController/authController.js";

const authRouter = express.Router();

authRouter.post("/register", userAuthRegister);
authRouter.post("/login", userAuthLogin);
authRouter.post("/logout", userAuthLogout);

export default authRouter;

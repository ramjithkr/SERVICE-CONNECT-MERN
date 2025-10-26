import express from "express";

const userRouter = express.Router();

//test route
userRouter.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "User Router Running" });
});

// userRouter.use("/signup");
// userRouter.use("/profile");
// userRouter.use("/settings");

export default userRouter;

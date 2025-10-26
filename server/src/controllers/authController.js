export const userRegister = async (req, res) => {
  try {
    res
      .status(200)
      .json({ success: true, message: "User Regestered Successfully" });
  } catch (error) {
    console.error("Error in user registration:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

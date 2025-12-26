export const userAuthRegister = async (req, res) => {
  try {
    res.status(200).json({ message: "User registered successfully " });
  } catch (error) {
    console.error("Error in userAuthRegister:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const userAuthLogin = async (req, res) => {
  try {
    res.status(200).json({ message: "UserLogin SuccessFully" });
  } catch (error) {
    console.error("Error in userAuthLogin:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const userAuthLogout = async (req, res) => {
  try {
    res.status(200).json({ message: "User Logout SuccessFully" });
  } catch (error) {
    console.error("Error in userAuthLogout:", error);
    res.status(500).json({ message: "Internal Server Error " });
  }
};

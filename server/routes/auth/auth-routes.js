const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  authMiddleware,
  loginWithGoogle,
  updateUser,
} = require("../../controllers/auth/auth-controller");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/loginWithGoogle", loginWithGoogle);
router.get("/check-auth", authMiddleware, (req, res) => {
  const user = req.user;
  res.status(200).json({
    success: true,
    message: "Authenticated user!",
    user,
  });
});
router.put("/update", authMiddleware, updateUser);

module.exports = router;

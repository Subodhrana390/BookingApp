import { Router } from "express";
import {
  deleteUserById,
  getAllUsers,
  getUserById,
  updateUser,
} from "../controller/User.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = Router();

// router.route("/checkAuthentication").get(verifyToken, (req, res, next) => {
//   res.send("hello user, you are logged in");
// });

// router.route("/checkUser/:id").get(verifyUser, (req, res, next) => {
//   res.send("hello user, you are logged in & delete your account");
// });

// router.route("/checkAdmin/:id").get(verifyAdmin, (req, res, next) => {
//   res.send("hello Admin, you are logged in & delete your account");
// });
router.route("/:id").put(verifyUser, updateUser);

router.route("/").get(verifyAdmin, getAllUsers);

router.route("/:id").get(verifyUser, getUserById);

router.route("/:id").delete(verifyUser, deleteUserById);

export default router;


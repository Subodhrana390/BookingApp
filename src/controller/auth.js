import { User } from "../models/User.js";
import { createError } from "../utils/error.js";
import bcrypt from "bcryptjs";

const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      isAdmin: req.body.isAdmin,
    });
    await newUser.save();
    res.status(200).json("user has been created");
  } catch (error) {
    next(createError(error));
  }
};

export { register };

import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import createAccessToken from "../libs/jwt.js";

const register = async (req, res) => {
  console.log(req.body);
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const userSaved = await newUser.save();
    const token = createAccessToken({ id: userSaved._id });
    res.cookie("token", token);
    res.status(201).json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const login = (req, res) => {
  res.send("login");
};

export default {
  register,
  login,
};

import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
    jwt.sign(
      {
        id: userSaved._id,
      },
      "secret123",
      {
        expiresIn: "1d",
      },
      (err, token) => {
        if (err) {
          console.log(err);
        }
        res.cookie("token", token);
        res.json({
          message: "Usuario creado correctamente",
        });
      }
    );

    // res.status(201).json({
    //   id: userSaved._id,
    //   username: userSaved.username,
    //   email: userSaved.email,
    // });
  } catch (error) {
    console.log(`Error al registrar nuevo usuario ${error}`);
  }
};
const login = (req, res) => {
  res.send("login");
};

export default {
  register,
  login,
};

import "dotenv/config";
import jwt from "jsonwebtoken";

const authRequired = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res
      .status(401)
      .json({ message: "Token invalido, accesso denegado" });
  }

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(401).json({ message: "invalid token" });
    }
    req.user = user;
    next();
  });
};
export default authRequired;

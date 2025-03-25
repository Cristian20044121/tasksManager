import "dotenv/config";
import jwt from "jsonwebtoken";

function createAccessToken(payload) {
  new Promise((resolve, rejected) => {
    jwt.sign(
      payload,
      process.env.TOKEN_SECRET,
      {
        expiresIn: "1d",
      },
      (err, token) => {
        if (err) {
          rejected(err);
        }
        resolve(token);
      }
    );
  });
}

export default createAccessToken;

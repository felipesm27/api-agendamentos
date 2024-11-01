import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secretToken = process.env.SECRET_TOKEN;

function CreateToken(id_user) {
  const token = jwt.sign({ id_user }, secretToken, { expiresIn: "1d" });

  return token;
}

function ValidateToken(req, res, next) {
  const authToken = req.headers.authorization;

  if (!authToken) return res.status(401).json({ message: "Token is required" });
  const [bearer, token] = authToken.split(" ");

  jwt.verify(token, secretToken, (err, tokenDecoded) => {
    if (err) return res.status(401).json({ message: "Token invalid" });

    req.id_user = tokenDecoded.id_user;

    next();
  });
}

export default { CreateToken, ValidateToken };

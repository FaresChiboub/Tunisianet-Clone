import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/User.js";
dotenv.config();

const secretKey=process.env.JWT_SECRET

function generateToken(user){
return jwt.sign({id:User._id,username:user.username},secretKey,{expiresIn:"1h"})
}
function verifyToken(token){
return jwt.verify(token,secretKey)
}

export {generateToken,verifyToken}
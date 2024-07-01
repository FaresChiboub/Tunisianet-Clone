import User from "../models/User.js";
import colors from "colors";
import { generateToken } from "../utils/jwtUtils.js";

export default async (req, res) => {
  const { gender, firstName, lastName, email, password, dateOfBirth } =
    req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    const newUser = new User({
      gender,
      firstName,
      lastName,
      email,
      password,
      dateOfBirth,
    });
    await newUser.save();
    const token = generateToken(newUser);
    res
      .status(201)
      .json(colors.green({ message: "User registered Successfully", token }));
  } catch (error) {
    console.error("Error in user sign-up:", error);
    res.status(500).json({ message: "Server error" });
  }
};

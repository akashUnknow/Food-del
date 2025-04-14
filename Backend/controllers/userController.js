import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

//login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "user does not exist" });
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({ success: false, message: "Invalid password" });
    }

    const token = createToken(user._id);
    return res.json({ success: true, token });
  } catch (error) {
    return res.json({ success: false, message: "error" });
  }
};

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

//registeruser

const registerUser = async (req, res) => {
  const { name, password, email } = req.body;
  try {
    const existName = await userModel.findOne({ email });
    if (existName) {
      return res.json({ success: false, message: "user already exist" });
    }
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Email is not valid" });
    }
    if (password.length < 8) {
      return res.json({ success: false, message: "password must be 8 digits" });
    }

    //encytion password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const newUser = new userModel({
      name: name,
      email: email,
      password: hashPassword,
    });
    const user = await newUser.save();
    const token = createToken(user._id);
    return res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "Error" });
  }
};

export { loginUser, registerUser };

const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config");

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user,config.authentication.jwtSecret, {
    expiresIn : ONE_WEEK
  })
}

exports.registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
      res.status(409).json({ error: "Email is already in use" });
    } else {
      const salt = await bcrypt.genSalt(10);
      const newPassword = await bcrypt.hash(password, salt);
      const newUser = await User.create({
        firstName,
        lastName,
        email,
        password: newPassword,
      });
      await newUser.save();
      if (newUser) {
        const { password, ...userDetails } = newUser.toJSON();
        res.status(201).json({ message: "Registration successful", user: userDetails });
      } else {
        res.status(422).json({ error: "Invalid user data" });
      }
    }
  } catch (err) {
    res.status(422).json({ error: err.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const passwordMatch = await user.comparePassword(password)

    if (!passwordMatch) {
      return res.status(403).json({ error: "Invalid password" });
    }

    const { password: _, ...userDetails } = user.toJSON();
    res.status(200).json({ message: "Login successful", user: userDetails , token: jwtSignUser(userDetails) });
  } catch (err) {
    res.status(422).json({ error: err.message });
  }
};

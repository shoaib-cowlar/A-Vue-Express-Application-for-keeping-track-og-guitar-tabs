const {User} = require('../models')
const config = require('../config/index')

exports.registerUser = async (req, res) => {
    try {
      const { firstName, lastName, email, password } = req.body;
      const userExists = await User.findOne({ email });
      if (userExists) {
        res.status(400);
        throw new Error("Email is already in use");
      } else {
        const salt = await bcrypt.genSalt(10);
        const newPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
          firstName,
          lastName,
          email,
          password: newPassword,
        });
        await newUser.save();
        if (newUser) {
          res.json({
            _id: newUser._id,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email,
          });
        } else {
          res.status(400);
          throw new Error("Invalid user data");
        }
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
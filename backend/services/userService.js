const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/index');
exports.signInUser = async (userRequest) => {
  const { email, password } = userRequest;

  const user = await User.findOne({ email });
  const id = user._id;
  const name = user.name;
  if (bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign(
      {
        email: user.email,
        name: user.name,
      },
      config.secret,
      {
        expiresIn: '2h',
      }
    );
    return { token, name, id };
  }
};
exports.signUpUser = async (userRequest) => {
  const user = await new User(userRequest);
  user.password = await bcrypt.hashSync(userRequest.password, 12);
  await user.save();
};

exports.getUserById = async (userId) => {
  return await User.findById(userId);
};
exports.getUsers = async () => {
  return await User.find({});
};

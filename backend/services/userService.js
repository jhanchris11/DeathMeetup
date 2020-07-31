const User = require('../models/user');
// const bcrypt = require('bcrypt')

exports.addUser = async (userRequest) => {
    const user = await new User(userRequest);
    console.log(user)
    // user.password = await bcrypt.hash()
    await user.save();
}

exports.getUserById = async (userId) => {
    return await User.findById(userId);
}
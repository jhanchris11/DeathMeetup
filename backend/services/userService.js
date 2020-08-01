const User = require('../models/user');
const bcrypt = require('bcrypt')

exports.addUser = async (userRequest) => {
    const user = await new User(userRequest);
    user.password = await bcrypt.hashSync(userRequest.password, 12);
    await user.save();
}

exports.getUserById = async (userId) => {
    return await User.findById(userId);
}
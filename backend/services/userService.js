const User = require('../models/user');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.signInUser = async (userRequest) => {

    const { email, password } = userRequest

    const user = await User.findOne({ email });
   
    if (bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({
            email: user.email,
            name: user.name,
        }, process.env.SECRET_TOKEN, {
            expiresIn: '1h'
        })
        return token
    }
}
exports.signUpUser = async (userRequest) => {
    const user = await new User(userRequest);
    user.password = await bcrypt.hashSync(userRequest.password, 12);
    await user.save();
}

exports.getUserById = async (userId) => {
    return await User.findById(userId);
}
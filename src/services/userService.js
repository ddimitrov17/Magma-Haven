const { User } = require("../models/User");
const bcrypt = require('bcrypt')

async function register(username, email, password) {
    const existingEmail = await User.findOne({ email });
    const existingUsername = await User.findOne({ username });

    if (existingEmail || existingUsername) {
        //TODO Error Handling
    }

    const user = new User({
        username,
        email,
        password: await bcrypt.hash(password, 10)
    });

    await user.save();
    return user;
}

async function login(email, password) {
    const user = await User.findOne({ email });
    if (!user) {
        //TODO Error Handling
    };
    const comparison = bcrypt.compare(password, user.password);
    if (!comparison) {
        //TODO Error Handling
    };

    return user;
}

module.exports = {
    register,
    login
}
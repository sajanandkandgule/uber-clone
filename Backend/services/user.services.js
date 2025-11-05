
const userModel = require('../models/user.model');
const bcrypt = require('bcryptjs');

module.exports.createUser = async ({firstname, lastname, email, password}) => {
    if(!firstname || !email || !password){
        throw new Error('All fields are required');
        
    }

     const user = userModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password
    });

    console.log("New User Created:", user);
    // await user.save();
        return user;
};

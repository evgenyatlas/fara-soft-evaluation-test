const { Schema, model } = require('mongoose')

const UserSchema = Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    }
});

const User = model(UserSchema, 'user');

module.exports.User = User;
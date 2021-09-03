const { Schema, model } = require('mongoose')

const ChatSchema = Schema({
    name: {
        type: String,
        required: true,
    }
})

const Chat = model(ChatSchema, 'chat')

module.exports.Chat = Chat
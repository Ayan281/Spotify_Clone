const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username : {
        unique : true,
        type :String ,
        required : true
    },
    email : {
        unique : true,
        type :String ,
        required : true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: [ 'user', 'artist' ],
        default: 'user',
    }
})

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
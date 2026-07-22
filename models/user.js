const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose").default;

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
});

userSchema.plugin(passportLocalMongoose);

//console.log("Type:", typeof passportLocalMongoose);
//console.log(passportLocalMongoose);

//console.log("Schema methods:", Object.keys(userSchema.methods));

//module.exports = mongoose.model("User", userSchema);

const User = mongoose.model("User", userSchema);

console.log("Has authenticate:", typeof User.authenticate);

module.exports = User;


const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
    fName: String,
    lName: String,
    email: {type:String,unique:true},
    phone: String,
    password: String,
    address: {
        street: String,
        city: String,
        state: String,
        postalCode: Number,
    },
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
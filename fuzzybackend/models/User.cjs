const mongoose = require('mongoose');
const {v4:uuidv4} = require('uuid');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin:{type:Boolean, default:false},
    uuid:{ type: String,
        default: uuidv4, // Automatically assign UUID when a new user is created
        unique: true},
        phoneNumber: { type: String, default: '' },
    cart:{
        type:[
            {
                productId:{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:'products'
                },
                quantity:{
                    type:Number,
                    default:1
                }
            }
        ],
        default:[]
    }
});
module.exports = mongoose.model('User', UserSchema);

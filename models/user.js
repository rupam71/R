const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error ('Email not valid')
            }
        },
        trim: true,
        loadClass:true
    },
    password: {
        type: String,
        required: true,
        default: 'qwer   yuio   plmbvcxd    hjhghjb guytgfuyg',
        trim : true,
        validate(value){
            if(value.length<6) {
                throw new Error('Password need to be atleast 6 word')
            }
            if(value==='password') {
                throw new Error('password can not be password')
            }
        }
    },
    phoneNumber: {
        type: Number,
        required: true,
        trim: true
    }
},{
    timestamps: true
})

userSchema.statics.findByCredential = async (email,password) => {
    const user = await User.findOne({email})
    
    if(!user) throw new Error('email not match')
    if(password !== user.password) throw new Error('password not match')
    
    return user
}

const User = mongoose.model('user',userSchema)
module.exports = User
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },

  password: {
    type: String,
    trim: true,
    required: true,
  },

});

userSchema.pre("save",async function (next){
    const user = this;

    if(user.isModified("password")){
        user.password = await bcrypt.hash(user.password,8)
    }
    next()
})

userSchema.statics.findByCredentials = async(username,password)=>{
    const user = await User.findOne({username})

    if(!user){
        throw new Error()
    }

    const isMatch = await bcrypt.compare(password,user.password)

    if(!isMatch){
        throw new Error()
    }
    return user;
}

const User = mongoose.model("Teacher", userSchema);

module.exports = User ;

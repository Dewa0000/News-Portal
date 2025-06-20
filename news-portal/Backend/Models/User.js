const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const schema = mongoose.Schema;

const userSchema = new schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

//Static signup method
userSchema.statics.signup = async function(email,password) {
     const exists = await this.findOne({email})

     if(exists){
        throw Error("Email Already in use")
     }
      
     const salt = await bcrypt.genSalt(10);
     const hash = await bcrypt.hash(password,salt);

     const user = await this.create({email,password:hash});

     return user
}

const Auth = mongoose.model("Auth", userSchema);
module.exports = Auth;
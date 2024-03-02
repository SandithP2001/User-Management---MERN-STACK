import mongoose from 'mongoose';
//this is how we create the model..check mongoose official site for the code..learn how to copy paste
const UserSchema = new mongoose.Schema({

    username:{
        type: String,
        required: true,
        unique: true
    },
    address:{
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
        validate: {
          validator: function (v) {
            // Use a regular expression to check if it's exactly 10 digits
            return /^\d{10}$/.test(v);
          },
          message: 'Mobile number must be exactly 10 digits long',
        },
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
},{timestamps:true});
//check timestamps
export default mongoose.model("User", UserSchema);



//ctrl+shift+L to replace the same word in multiple places
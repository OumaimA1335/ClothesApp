const mongoose = require('mongoose');

const schema = mongoose.Schema;

const UserSchema = new schema ({
    name :{
        type :String,
        required : true
    },
    Email :{
        type :String,
        required : true
    },
  
   
    image : {
        type :String,
        required : true
    }
});
module.exports = mongoose.model("User" , UserSchema);

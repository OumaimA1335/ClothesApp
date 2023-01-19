const mongoose = require('mongoose');

const schema = mongoose.Schema;

const ClothesSchema = new schema ({
    name :{
        type :String,
        required : true
    },
    description : {
        type :String,
        required : true
    },
    gender : {
        type :String,
        required : true
    },
    price : {
        type :Number,
        required : true
    },
    image : {
        type :String,
        required : true
    }
});
module.exports = mongoose.model("Clothes" , ClothesSchema);

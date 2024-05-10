const mongoose =require('mongoose');
const tacheSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    name:{
        type:[String],
        required:true
    },
    dateEnd:{
        type:Date,
        required:true
    },
    hour:{
        type:String,
        required:true
    }
});
module.exports= mongoose.model("Taches",tacheSchema);
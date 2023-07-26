const mongoose=require('mongoose');

const productschema=mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    content:[{question : String,answer:String}]
    
});
module.exports=mongoose.model('Project',productschema);
const mongoose = require('mongoose');
const Taches = mongoose.model("Taches");

exports.createTache=async(data)=>{
    const {title,name,dateEnd,hour}=data;
    const tache=await Taches.findOne({
        title
    });
    if(tache){
        throw "Cette tache existe deja";
    }
    const addtache=await Taches({
        title,name,
        dateEnd,hour
    });
    return await addtache.save();
};
exports.allTaches=async(req,res)=>{
    const all= await Taches.find();
    return await all;
}
exports.deleteTache=async(id)=>{
    const find= await Taches.findById(id);
    if(!find){
        throw "Cette tache n'existe pas "
    }
    const del= await Taches.findByIdAndDelete(id)
    return await del;
}
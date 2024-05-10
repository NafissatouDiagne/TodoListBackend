const tacheservice=require('../services/tachesServices');

exports.createTache=async(req,res,next)=>{
   try {
    const data=req.body;
    const tache=await tacheservice.createTache(data);
    res.status(201).json({
        message:"Tache cree avec succes",addtache:tache
    })
    
   } catch (error) {
     console.error(error)
     res.status(501).json({
       message:'erreur lors de la creation des taches',error
     })
   }
}
exports.allTaches=async(req,res,next)=>{
    try {
        const all=await tacheservice.allTaches(req,res);
        res.status(200).json({
            message:"All Taches:",all:all
        })
    } catch (error) {
        console.error(error)
        res.status(501).json({
            message:"Erreur:",error
        })
    }
}
exports.deletetache=async(req,res,next)=>{
    try {
        const id= req.params._id;
        const del=await tacheservice.deleteTache(id);
        res.status(200).json({
            message:"taches supprimer avec succes:",del:del
        })
    } catch (error) {
        
    }
}
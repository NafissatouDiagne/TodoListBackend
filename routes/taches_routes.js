const router = require('express').Router();
const tacheCtrl=require('../controllers/tachesControllers')
const {catchErrors}= require('../handlers/errorHandlers')
router.post('/addTaches',catchErrors(tacheCtrl.createTache));
router.get('/allTaches',catchErrors(tacheCtrl.allTaches));
router.delete('/deleteTache/:_id',catchErrors(tacheCtrl.deletetache))
module.exports= router;
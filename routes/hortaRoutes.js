const express = require('express')
const router = express.Router();
const moment = require('moment-timezone');


const hortaModel = require('../models/horta');



function formatDate(){
    var date = moment.utc();
    var local = moment(date).local();
    console.log(local.toDate());
    return local.toDate();
}

//ROUTES
router.get('/', async (req,res)=>{
    try {
        console.log("chamei");
        
        const listHorta = await hortaModel.find();
        res.status(200).json(listHorta);
    } catch (error) {
        res.status(500).json({message: error})
    }
});

router.post('/', async(req,res)=>{
    teste = await formatDate();
    console.log("teste "+teste);
    const horta = new hortaModel({
        umidadeDoSolo: req.body.umidadeDoSolo,
        temperaturaDoAr: req.body.temperaturaDoAr,
        umidade: req.body.umidade,
        date: teste
    });
    try{
        const hortaSaved = await horta.save();
        console.log("salvei");
        res.status(200).json(hortaSaved);
    }catch(err){
        res.status(500).json({message : err});
    }
});

router.get('/:hortaId',async (req,res) =>{
    try {
        const horta = await Post.findById(req.params.hortaId);
        res.status(200).json(horta);
    } catch (error) {
        res.status(500).json({message: error})
    }
});

router.delete('/:hortaId',async (req,res) =>{
    try {
        const removedHorta = await Post.remove({_id : req.params.hortaId});
        res.status(200).json(removedHorta);
    } catch (error) {
        res.status(500).json({message: error})
    }
});
router.post('/data',async (req,res) =>{
    try {
        data_inicial = new Date(new Date().setFullYear(new Date().getFullYear() - 1));
        data_final = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
        // console.log(req.body.Data_Final);
        console.log(req.body);
        if(req.body.Data_Inicial != '' && req.body.Data_Final != ''){
            data_final = req.body.Data_Final;
            data_inicial = req.body.Data_Inicial;
        }
        await hortaModel.find().where('date')
                .gt(new Date(data_inicial))
                .lt(new Date(data_final))
                .exec((err, val)=>{
                    if(err){
                        res.status(500).json({message: error})                
                    }else{
                        res.status(200).json(val);     
                    }
                });
    } catch (error) {
        res.status(500).json({message: error})
    }
});
module.exports = router;

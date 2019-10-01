const express = require('express')
const router = express.Router();
const hortaModel = require('../models/horta');

//ROUTES
router.get('/', async (req,res)=>{
    try {
        const listHorta = await hortaModel.find();
        res.status(200).json(listHorta);
    } catch (error) {
        res.status(500).json({message: error})
    }
});

router.post('/', async(req,res)=>{
    const posts = new hortaModel({
        umidadeDoSolo: req.body.umidadeDoSolo,
        umidadeDoAr: req.boby.umidadeDoAr,
        temperaturaDoAr: req.body.temperaturaDoAr,
        nivelTanque: req.body.nivelTanque
    });
    
    try{
        const hortaSaved = await hortaModel.save();
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
/*
//UpdateData
router.patch('/:hortaId',async (req,res) =>{
    try {
        const updateHorta = await hortaModel.updateOne(
            { _id: req.params.hortaId},
            { $set: { 
                    umidadeDoSolo: req.body.umidadeDoSolo,
                    umidadeDoAr: req.boby.umidadeDoAr,
                    temperaturaDoAr: req.body.temperaturaDoAr,
                    nivelTanque: req.body.nivelTanque
                }
            }
        );
        res.status(200).json(updateHorta);
    } catch (error) {
        res.status(500).json({message: error})
    }
});
*/
module.exports = router;

const express = require('express')
const router = express.Router();
const Post = require('../models/posts')

//ROUTES
router.get('/', async (req,res)=>{
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({message: error})
    }
});

router.post('/', async(req,res)=>{
    const posts = new Post({
        title: req.body.title,
        description: req.body.description
    });
    
    try{
        const savedPost = await posts.save();
        res.status(200).json(savedPost);
    }catch(err){
        res.status(500).json({message : err});
    }
});

router.get('/:postId',async (req,res) =>{
    try {
        const posts = await Post.findById(req.params.postId);
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({message: error})
    }
});

router.delete('/:postId',async (req,res) =>{
    try {
        const removedPosts = await Post.remove({_id : req.params.postId});
        res.status(200).json(removedPosts);
    } catch (error) {
        res.status(500).json({message: error})
    }
});

//UpdateData
router.patch('/:postId',async (req,res) =>{
    try {
        const updatePosts = await Post.updateOne(
            { _id: req.params.postId},
            { $set: { title: req.body.title}}
        );
        res.status(200).json(updatePosts);
    } catch (error) {
        res.status(500).json({message: error})
    }
});

module.exports = router;

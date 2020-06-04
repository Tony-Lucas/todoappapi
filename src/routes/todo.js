const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

router.get('/',async(req,res) => {
    const response = await Todo.find({});
    res.json(response);
});

router.post('/',async(req,res) => {
    const todo = await Todo.create({
        description:req.body.description,
    });
    res.json(todo);
});

router.put('/',async(req,res) => {
    const response = await Todo.updateOne({_id:req.body.id},req.body);
    res.json(response);
});

router.delete('/:id',async(req,res) => {
    const response = await Todo.deleteOne({_id:req.params.id});
    res.json(response);
});

module.exports = router;

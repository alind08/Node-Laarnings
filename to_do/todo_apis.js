const express = require('express');
const mongoose = require('mongoose')
const db = require('./db_connect');
const app = express();
app.use(express.json());

const TodoSchema = new mongoose.Schema({
    title:String,
    description: String,
    time:String,
});
const TodoModel = mongoose.model('todo',TodoSchema);

//Get records from DB GET TYPE API

app.get('/getTodos',async (req,res)=>{
    console.log("get record api ",req.query);
    try{
        let data = await db.find().toArray()
        console.log(data);
        res.send({
            status:'SUCCESS',
            message:'Data fetched successfully',
            data: data
        });
    }catch(e){
        res.send({
            status:'ERROR',
            message: e.toString(),
            data: {}
        });
    }  
});

//Insert records to DB  POST TYPE API

app.post('/addTodo',async (req,res)=>{
    console.log("insert record api ",req.body);
    try{
        let data = new TodoModel({
            title:req.body.title,
            description:req.body.description,
            time:req.body.time
        });
        let result = await data.save();
        console.log(result);
        if(result.acknowledged){
            res.send({
                status:'SUCCESS',
                message:'Data added successfully',
                data: {}
            });
        }else{
            res.send({
                status:'ERROR',
                message:'Could not insert record',
                data: {}
            });
        }
    }catch(e){
        res.send({
            status:'ERROR',
            message: e.toString(),
            data: {}
        });
    }  
});


//Update records in DB PUT TYPE API

app.put('/updateTodo',async (req,res)=>{
    console.log("update record api ",req.body);
    try{
        let result = await db.updateOne(
            {id:req.body.id},
            {$set:{
                title:req.body.title,
                description: req.body.description,
                time: req.body.time,
            }}
        );
        if(result.acknowledged){
            res.send({
                status:'SUCCESS',
                message:'Data updated successfully',
                data: {}
            });
        }else{
            res.send({
                status:'ERROR',
                message:'Could not insert record',
                data: {}
            });
        }
    }catch(e){
        res.send({
            status:'ERROR',
            message: e.toString(),
            data: {}
        });
    }  
});

//Update records in DB DELETE TYPE API

app.delete('/deleteTodo',async (req,res)=>{
    console.log("delete record api ",req.body);
    try{
        let result = await db.deleteOne(
            {id:req.body.id},
        );
        console.warn(result);
        if(result.acknowledged && result.deletedCount>0){
            res.send({
                status:'SUCCESS',
                message:'Data deleted successfully',
                data: {}
            });
        }else{
            res.send({
                status:'ERROR',
                message:'Could not delete record',
                data: {}
            });
        }
    }catch(e){
        res.send({
            status:'ERROR',
            message: e.toString(),
            data: {}
        });
    }  
});


app.listen(5000);
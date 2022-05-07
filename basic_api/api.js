const express = require('express');
const dbConnect = require('../DB_CRUD/mongodb');
const req = require('../DB_CRUD/mongodb');
const app = express();
app.use(express.json());


//Get records from DB GET TYPE API

app.get('/getRecords',async (req,res)=>{
    console.log("get record api ",req.query);
    try{
        let data = await dbConnect();
        data = await data.find().toArray()
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

app.post('/insertRecord',async (req,res)=>{
    console.log("insert record api ",req.body);
    try{
        let data = await dbConnect();
        let result = await data.insertOne(req.body);
        if(result.acknowledged && result.deleteCount>0){
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

app.put('/updateRecord',async (req,res)=>{
    console.log("update record api ",req.body);
    try{
        let data = await dbConnect();
        let result = await data.updateOne(
            {name:req.body.name},
            {$set:{
                name:req.body.updatedName
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

app.delete('/deleteRecord',async (req,res)=>{
    console.log("delete record api ",req.body);
    try{
        let data = await dbConnect();
        let result = await data.deleteOne(
            {name:req.body.name},
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
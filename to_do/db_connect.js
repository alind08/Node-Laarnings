const mongoose = require('mongoose')

const dbConnect = async ()=>{
    await mongoose.connect('')
    mongoose 
 .connect("mongodb://localhost:27017/to-do", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,   })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log("Error is ",err));
    const TodoSchema = new mongoose.Schema({
        title:String,
        description: String,
        time:String,
    });
    const TodoModel = mongoose.model('todo',TodoSchema);
    let data = new TodoModel({
        title:"req.body.title",
        description:"req.body.description",
        time:"req.body.time"
    });
    let result = await data.save();
    console.log(result);
}

dbConnect();
// 

// module.exports = dbConnect;
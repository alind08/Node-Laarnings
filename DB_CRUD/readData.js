const dbConnect = require('./mongodb');

const getData = async ()=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.warn(data);
}

const getUniqueData = async ()=>{
    let data = await dbConnect();
    data = await data.find({name:'m40'}).toArray();
    console.warn(data);
}

// getData();
getUniqueData();
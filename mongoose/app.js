const mongoose = require('mongoose')

const main = async ()=>{
    await mongoose.connect('mongodb://localhost:27017/e-comm')
    const ProductSchema = new mongoose.Schema({
            name:String,
            price:Number,
            brand: String,
            category:String,
        });
        const ProductModel = mongoose.model('products',ProductSchema)

        let data = new ProductModel({
            name:"I1",
            price:11000,
            category:'Mobile', /////''m
            brand:'Intex'
        })
        let result = await data.save();
        console.log(result);
}
main();
const dbConnect = require('./mongodb');

const updateData = async ()=>{
    let data = await dbConnect();
    let result =await data.updateOne(
        {
            name:'Note 5'
        },
        {
            $set:{name: 'Redmi Note 5'}
        }
    )
    
    if(result.acknowledged){
        console.log('Record updated');
    }else{
        console.log('Record not updated');
    }


}

updateData();
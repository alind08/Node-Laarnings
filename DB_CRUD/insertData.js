const dbConnect = require('./mongodb');

const inserData = async ()=>{
    let db = await dbConnect();
    const result = await db.insertOne(
        {
            name:'Note 5',
            brand:'Xiomi',
            price:10000,
            category:'Mobile'
        }
    );
    if(result.acknowledged){
        console.warn('Data inserted');
    }else{
        console.warn('Failed to insert data');
    }
    
}

const inserDataList = async ()=>{
    let db = await dbConnect();
    const result = await db.insertMany(
        [
            {
                name:'Note 5',
                brand:'Xiomi',
                price:10000,
                category:'Mobile'
            },
            {
                name:'Note 6',
                brand:'Xiomi',
                price:12000,
                category:'Mobile'
            },
            {
                name:'Note 7',
                brand:'Xiomi',
                price:15000,
                category:'Mobile'
            }
        ]
    );
    if(result.acknowledged){
        console.warn('Data inserted');
    }else{
        console.warn('Failed to insert data');
    }
    
}

inserDataList();
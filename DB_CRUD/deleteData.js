const dbConnect = require('./mongodb');


  const deleteData = async ()=>{
      
      let data = await dbConnect();
      let result = await data.deleteOne(
          {
              name:'Redmi Note 5'
          }
      )
      if(result.acknowledged && result.deletedCount>0){
        console.log('Record deleted');
      }else{
        console.log('Record not deleted');
      }
  }

  deleteData();
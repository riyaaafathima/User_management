const mongoose= require('mongoose')


async function dbConnection() {
    try {
        mongoose.connect('mongodb://localhost:27017/userManagement').then(()=>{   // mongoose is database driver 
            console.log('databse connected 👽');
            
        })
    } catch (error) {
        throw new Error("data base error occured",error);
        
    }
}


module.exports=dbConnection
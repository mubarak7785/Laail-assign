const mongoose = require ("mongoose")

module.exports= ()=>{
        return mongoose.connect("mongodb+srv://mubarak:mubarak_123@cluster0.pvaka.mongodb.net/laail_data?retryWrites=true&w=majority")
}
   

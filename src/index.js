const express = require ("express")
const cors = require("cors")

const app = express()
app.use(cors())
const port=process.env.PORT || 4920
app.use(express.json())

const connect=require("./configs/db")




const usersController=require("./controllers/users.controller")
const contractsController=require("./controllers/contracts.controller")
app.use("/users",usersController)
app.use("/contracts",contractsController)


app.listen(port,async function (req,res){
    try{
        await connect();
        console.log ("Listening Port 4920")
    }catch(err){
        console.log(err.message)
    }
})
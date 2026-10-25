const express = require("express")
const cors =require("cors")
const app = express()
app.use(cors())

var users =[
    {
        email:"akilan@email.com",
        password:1234
    }
]

app.use(express.json())

app.post("/login",(req,res)=>{
    console.log(req.body.useremail)
    if(req.body.useremail===email&&req.body.userpassword===password)
    {
        res.send(true)
    }
    else{
        res.send(false)
    }
})

app.listen(5000,()=>{
    console.log("Port 5000 start ....")
})
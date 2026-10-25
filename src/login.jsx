import { useState } from "react"
import axios from 'axios'
const Login =()=>{
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    
    var loginDetails=axios.post("http://localhost:500/login",{"useremail":email,"userpassword":password})
    loginDetails.then((data)=>{
        if(data.data===true){
            console.log("login successfull")
        }else{
            console.log("login failed")
        }
    })
    return(
        <div>
            <input name="useremai" onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Entrer your email" />
            <input name="userpassword" onChange={(e)=>setPassword(e.target.value)} type="text" placeholder="Enter your Password" />
            <button>Login</button>
        </div>
    )
}
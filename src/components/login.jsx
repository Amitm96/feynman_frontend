import React from "react";
import { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
    let [username , setusername] = useState("");
    let navigate = useNavigate()
    useEffect(() => {
        let user = localStorage.getItem('user');
        if(user){
            navigate("/dashboard")
        }
    })
    async function Ulogin(){
        let data = {uName : username}
        let res = await fetch("http://localhost:5000/user/loginuser" , {method : 'post' , body : JSON.stringify(data) , headers : {'Content-Type' : 'application/json'}});
        res = await res.json()
        if(res.status == false){
            alert(res.message)
        }else{
            localStorage.setItem('user' , JSON.stringify(res.message))
            navigate("/dashboard")
        }
    }
    function Handleenter(event){
        if(event.key == "Enter"){
            Ulogin()
        }
    }
    return (
        <div className="login">
            <h1>Login User</h1>
            <input type="text" placeholder="Enter User Name" className="inpt" value={username} onChange={(e) => setusername(e.target.value)} onKeyDown={Handleenter}/>
            <small style={{color : "red"}}>If not registerd , register first</small>
        </div>
    )
}

export default Login
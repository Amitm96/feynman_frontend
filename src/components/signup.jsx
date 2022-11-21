import React from "react";
import { useState } from "react";
const Signup = () => {
    const [username , setusername] = useState("");
    const [password , setpassword] = useState("");
    async function Submitdetails(){
        let rgx = /[A-Za-z][A-Za-z0-9_]{7,29}$/
        if(!rgx.test(username)){
            alert("Enter valid username username must be 8 character long")
        }
        else if(password.trim().length < 8 ){
            alert("password length must be greater than equals to 8 character long")
        }
        else{
            let data = {uName : username , password : password}
            let res = await fetch("http://localhost:5000/user/registeruser" , {method : 'post' , body : JSON.stringify(data) , headers : {'Content-Type' : 'application/json'}});
            res = await res.json()
            if(res.status == false){
                alert(res.message)
            }else{
                alert("user created successfuly")
            }
        }

    }
    return (
        <div className="signup">
            <h1>Signup User</h1>
            <input type="text" placeholder="Set User Name" className="inpt" value={username} onChange={(e) => setusername(e.target.value)}/>
            <input type="password" placeholder="Set password" className="inpt" value={password} onChange={(e) => setpassword(e.target.value)}/>
            <button type="button" className="btn" onClick={Submitdetails}>Create user</button>
        </div>
    )
}

export default Signup
import React from "react";
import { useState  , useEffect} from "react";
import { useNavigate } from "react-router-dom";
const Addtopic = () => {
    const [topicname , settopicname] = useState("")
    const [topicdetails , settopicdetails] = useState("")
    let navigate = useNavigate()
    useEffect(() => {
        let user = localStorage.getItem('user');
        if(!user){
            navigate("/")
        }
    })
    async function Submitdetails(){
    }
    return (
        <div className="container" style={{ width: "600px", height: "auto", background: "skyblue", color: "white" }}>
            <h1>Add Topic</h1>
            <form className="align-self-center">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Enter Topic Name" value={topicname} onChange={(e) => settopicname(e.target.value)}/>
                </div>
                <div className="form-group">
                    <textarea type="textarea" className="form-control" rows="5" value={topicdetails} onChange={(e) => settopicdetails(e.target.value)}/>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <button type="button" className="btn btn-primary" style={{width : "100px"}} onClick={Submitdetails}>Add</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Addtopic
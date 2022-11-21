import React from "react";
import { useEffect , useState } from "react";
import { useNavigate , Link} from "react-router-dom";
const Dasboard = () => {
    const [topiclist , settopiclist] = useState([])
    let navigate = useNavigate()
    useEffect(() => {
        let user = localStorage.getItem('user');
        if(!user){
            navigate("/")
        }
        else{
            Gettopiclist()
        }
    })

    async function Gettopiclist(){
        let userObj = JSON.parse(localStorage.getItem('user'))
        let userid = userObj._id
        let res = await fetch(`http://localhost:5000/user/topic/gettopic?userId=${userid}`)
        res = await res.json()
        settopiclist(res.message)
    }

    return (
        <div className="container">
            <h1>Topic List</h1>
            <table className="table table-dark">
                <thead className="theading">
                    <tr>
                        <th scope="col">Sl. No</th>
                        <th scope="col">Topic Name</th>
                        <th scope="col">Topic Understanding</th>
                    </tr>
                </thead>
                <tbody>
                    {topiclist.map((e , idx) => {
                        return (
                            <tr>
                                <td scope="row">{idx + 1}</td>
                                <td>{e.topicName}</td>
                                <td>{e.tUnderstanding}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <button type="button" className="btn btn-primary"><Link to="/addtopic">Add Topic</Link></button>
        </div>
    )
}

export default Dasboard
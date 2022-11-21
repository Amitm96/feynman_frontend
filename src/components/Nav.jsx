import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Nav = () => {
    let user = localStorage.getItem('user');
    let navigate = useNavigate()
    function Logout(){
        localStorage.clear()
        navigate("/")
    }
    return (
            <ul className="navbar">
                <li className="navel"><Link className="naclnk" to="/dashboard">Dashboard</Link></li>
                {!user ? <><li className="navel"><Link className="navlnk" to="/signup">Signup</Link></li>
                <li className="navel"><Link className="navlnk" to="/">Login</Link></li></> : <li className="navel"><Link className="navlnk" to="/" onClick={Logout}>Logout</Link></li>}
            </ul>
    )
}

export default Nav
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div style={{display:"flex",justifyContent:"space-around",border:"2px solid red"}}>
        <Link to={"/"}>Home</Link>
        <Link to={"/admin"}>Admin</Link>
        <Link to={"/student"}>Student</Link>
        </div>
    );
}

export default Navbar;
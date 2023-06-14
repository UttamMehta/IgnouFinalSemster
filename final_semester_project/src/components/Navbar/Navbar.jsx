import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div style={{display:"flex",justifyContent:"space-around",border:"2px solid red",height:"50px",backgroundColor:"grey",color:"black"}}>
        {/* <Link to={"/"}>University Name</Link>
        <Link to={"/admin"}>Admin</Link>
        <Link to={"/student"}>Student</Link>
        <Link to={"/event"}>Event</Link>
        <Link to={"/ticketing"}>Ticketing</Link>
        <Link to={"/News"}>News</Link>
        <Link>....</Link> */}

        <Link to={"/"}>Home</Link>
        <Link to={"/login"}>Login</Link>
        </div>
    );
}

export default Navbar;
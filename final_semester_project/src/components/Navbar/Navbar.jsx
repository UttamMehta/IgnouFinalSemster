import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div style={{display:"flex",justifyContent:"space-around",border:"2px solid red",height:"300%",backgroundColor:"blue"}}>
        <Link to={"/"}>University Name</Link>
        <Link to={"/admin"}>Admin</Link>
        <Link to={"/student"}>Student</Link>
        <Link to={"/event"}>Event</Link>
        <Link to={"/ticketing"}>Ticketing</Link>
        <Link to={"/News"}>News</Link>
        <Link>....</Link>
        </div>
    );
}

export default Navbar;
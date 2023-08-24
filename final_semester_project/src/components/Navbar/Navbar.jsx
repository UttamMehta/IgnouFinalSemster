import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from "./Navbar.module.css"

function Navbar() {
    return (
        <div className={styles.navbar}>
      <div>  <Link to={"/"}>Home</Link></div>
       <div> <Link to={"/register"}>Registration</Link></div>
       <div><Link to={"/login"}>Login</Link></div> 
       <div Link to={"/news"}>News</div>
        </div>
    );
}

export default Navbar;
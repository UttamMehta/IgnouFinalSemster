import React from 'react'
import { Link } from 'react-router-dom'

export default function Admin() {
  return (
    <div>
       <div>  <Link to={"/alluser"}>Show All Students</Link></div>
       <div> <Link to={"/email"}>Send Emails</Link></div>
       {/* <div><Link to={"/login"}>Login</Link></div> 
       <div> <Link to={"/news"}>News</Link> </div>
       <div> <Link to={"/admin"}>Admin Login</Link> </div> */}
    </div>
  )
}


import React from 'react';
import {Routes,Route}from "react-router-dom"
import LogIn from '../components/LogIn/LogIn';
import AdminLogIn from '../components/AdminLogIn/AdminLogIn';
import Home from '../components/Home/Home';
import Timer from '../components/Timer/Timer';



function AllRoutes(props) {
    return (
        <div>
            <Routes >
              {/* <Route path="/" element={<Home />}/>
              <Route path="/student" element={<LogIn/>}/>
              <Route path="/admin" element={<AdminLogIn/>}/>
              <Route path="*" element={<h1 style={{color:"red"}}>Error No Such Page</h1>}/> */}
            
            <Route path="/" element={<Timer />} />

              {/* <Route Path="/error" element={} /> */}
            </Routes>
        </div>
    );
}

export default AllRoutes;
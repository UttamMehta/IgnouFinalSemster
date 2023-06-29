
import React from 'react';
import {Routes,Route}from "react-router-dom"
import LogIn from '../components/LogIn/LogIn';
import AdminLogIn from '../components/AdminLogIn/AdminLogIn';
import Home from '../components/Home/Home';
import Timer from '../components/Timer/Timer';
import Board from '../ListedComponents/Board/Board';
import Dashboard from '../ListedComponents/Dashboard/Dashboard';



function AllRoutes(props) {
    return (
        <div>
            <Routes >
              <Route path="/" element={<Home />}/>
              <Route path="/student" element={<LogIn/>}/>
              <Route path="/admin" element={<AdminLogIn/>}/>
              <Route path="*" element={<h1 style={{color:"red"}}>Error No Such Page</h1>}/>
        
            

              {/* <Route Path="/error" element={} /> */}

              {/* <Route path="/" element={<Board />}/>
              <Route path="/dashboard" element ={<Dashboard />} /> */}


            </Routes>
        </div>
    );
}

export default AllRoutes;

import React from 'react';
import {Routes,Route}from "react-router-dom"
import LogIn from '../components/LogIn/LogIn';
import AdminLogIn from '../components/AdminLogIn/AdminLogIn';



function AllRoutes(props) {
    return (
        <div>
            <Routes >
              <Route path="/" element={<LogIn />}/>

              <Route path="/admin" element={<AdminLogIn/>}/>

            </Routes>
        </div>
    );
}

export default AllRoutes;
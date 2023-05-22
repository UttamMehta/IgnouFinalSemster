
import React from 'react';
import {Routes,Route}from "react-router-dom"
import LogIn from '../components/LogIn/LogIn';



function AllRoutes(props) {
    return (
        <div>
            <Routes >
              <Route path="/" element={<LogIn />}/>

            </Routes>
        </div>
    );
}

export default AllRoutes;
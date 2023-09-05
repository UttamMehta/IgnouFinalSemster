
import React from 'react';
import {Routes,Route}from "react-router-dom"
import LogIn from '../components/Sign_up/Login';
import AdminLogIn from '../components/AdminLogIn/AdminLogIn';
import Home from '../components/Home/Home';
import Timer from '../components/Timer/Timer';
import Signup from '../components/Sign_up/Signup';
import User from "../components/UserPage/User"
import UserCardDetail from '../components/Pdf/UserCardDetails';
import VideoThumnails from '../components/Videopage/VideoThumnails';
import VideoPlaySingle from '../components/Videopage/VideoPlaySingle';
import NewsComponent from '../components/NewsPages/NewsComponent';
import Email from '../components/AdminLogIn/Email';
import Admin from '../components/AdminLogIn/Admin';



function AllRoutes(props) {
    return (
        <div>
            <Routes >
              <Route path="/" element={<Home />}/>
              <Route path="/register" element={<Signup/>}/>
              <Route path="/login" element={<LogIn/>}/>
              <Route path='/User' element={<User /> }/>
              <Route path='/Card' element={<UserCardDetail /> }/>
              <Route path='/Video' element={<VideoThumnails /> }/>
              <Route path='/play/:id' element={<VideoPlaySingle /> }/>
              <Route path='/news' element={<NewsComponent />} />
              <Route path='/admin' element={<AdminLogIn />} />
              {/* <Route path='/admin/otherpages' element={<Admin />} /> */}
              <Route path='/email' element={<Email />} />

              <PrivateRoute
          exact
          path="/student-dashboard"
          component={StudentDashboardPage}
          isAuthenticated={userAuthenticated}
          userRole="student"
          allowedRoles={['student']}
        />
        <PrivateRoute
          exact
          path="/admin-dashboard"
          component={AdminDashboardPage}
          isAuthenticated={userAuthenticated}
          userRole="admin"
          allowedRoles={['admin']}
        />
        <PrivateRoute
          exact
          path="/email"
          component={EmailPage}
          isAuthenticated={userAuthenticated}
          userRole="admin"
          allowedRoles={['admin']}
        />


              <Route path="*" element={<h1 style={{color:"red"}}>Error No Such Page</h1>}/>
        
            

              {/* <Route Path="/error" element={} /> */}

              {/* <Route path="/" element={<Board />}/>
              <Route path="/dashboard" element ={<Dashboard />} /> */}


            </Routes>
        </div>
    );
}

export default AllRoutes;
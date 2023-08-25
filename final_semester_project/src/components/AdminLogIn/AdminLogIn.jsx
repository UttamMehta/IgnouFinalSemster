import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Email from './Email';
import axios from 'axios';

function AdminLogIn(props) {

    const [state,setState]=useState({email:"",password:""});
    const [admin,setAdmin]=useState(false);


    function updateState(e){
        const {value,name}=e.target;
        setState({...state,[name]:value});
    }

    function checkadmin(e){
        e.preventDefault();
        if(state.email==="Admin"&&state.password==="1234")
       { alert ("admin chekced  sucessful");
    setAdmin(true);
    }
    else{
        alert("admin credential not matched");
    }
    }

    if(admin)
    return <Navigate to="/email" />;
    

    console.log(state);

    return (
          <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={checkadmin}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email"onChange={updateState} />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" onChange={updateState}/>

        <button type="submit">Login</button>
      </form>
        </div>
    );
}

export default AdminLogIn;
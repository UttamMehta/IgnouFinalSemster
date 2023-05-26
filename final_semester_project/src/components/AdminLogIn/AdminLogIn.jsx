import React, { useState } from 'react';

function AdminLogIn(props) {

    const [state,setState]=useState({email:"",password:""});


    function updateState(e){
        const {value,name}=e.target;
        setState({...state,name:value});
    }

    function checkadmin(e){
        e.preventDefault();
        alert ("admin chekced  sucessful");
    }

    console.log(state);

    return (
        <div>
            <form onSubmit={checkadmin}>
                <lable>
                    <input type='email' name="email" onChange={updateState}/>
                    Enter Your Email
                </lable><br/>
                <lable>
                    <input type='password' name="password" onChange={updateState}/>
                    Enter Your Password
                </lable><br/>
            <button disabled={state.password&&state.email?false:true}>Submit</button>
            </form>
            
        </div>
    );
}

export default AdminLogIn;
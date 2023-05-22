import React, { useState } from 'react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'
  import { Input } from '@chakra-ui/react'

function LogIn(props) {

  const {user,setUser}=useState({name:"",email:"",phoneno:"",address:"",password:""});

  function updateUser(e){
    const {value,name}=e.target;
    setUser({...user,name:value});
  }

  function userRegister(e){
    e.preventdefault();
    alert("user Register");
  }

    return (
        <div>
     {/* <FormControl>
  <FormLabel>Email address</FormLabel>
  <Input type='email' />
  <FormHelperText>We'll never share your email.</FormHelperText>
  <Input type='password' />
</FormControl> */}

<form onSubmit={userRegister}>
  <lable>
    <input type="email" name="email" onChange={updateUser}/>
    Enter Email
  </lable>
  <lable>
  <input type="password" name="password" onChange={updateUser}/>
  Enter Password
  </lable>
  <lable>
  <input type="number" name="phoneno" onChange={updateUser}/>
  Enter Mobile Number
  </lable>
  <lable>
  <input type="name" name="name" onChange={updateUser}/>
  Enter Your Name
  </lable>

<button >Submit</button>

</form>
            
        </div>
    );
}

export default LogIn;
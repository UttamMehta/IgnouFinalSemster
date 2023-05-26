import React, { useState } from 'react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'
  import { Input } from '@chakra-ui/react'

function LogIn(props) {

  const [user,setUser]=useState({name:"",email:"",phoneno:"",address:"",password:""});

  function updateUser(e){
    const {value,name}=e.target;
    setUser({...user,[name]:value});
  }

  function userRegister(e){
    // e.preventDefault();
    alert("user Register Sucessfully");
  }
  console.log(user);

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
  <br/>
  <lable>
  <input type="password" name="password" onChange={updateUser}/>
  Enter Password
  </lable>
  <br/>
  <lable>
  <input type="number" name="phoneno" onChange={updateUser}/>
  Enter Mobile Number
  </lable>
  <br/>
  <lable>
  <input type="name" name="name" onChange={updateUser}/>
  Enter Your Name
  </lable>
  <br/>
  <lable>
  <input type="String" name="address" onChange={updateUser}/>
  Enter Your Address
  </lable><br/>
<button disabled={user.name&&user.password&&user.phoneno&&user.email&&user.address?false:true}>Submit</button>
</form>   
        </div>
    );
}

export default LogIn;
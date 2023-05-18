import React from 'react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'
  import { Input } from '@chakra-ui/react'

function LogIn(props) {
    return (
        <div>
     <FormControl>
  <FormLabel>Email address</FormLabel>
  <Input type='email' />
  <FormHelperText>We'll never share your email.</FormHelperText>
  <Input type='password' />
</FormControl>
            
        </div>
    );
}

export default LogIn;
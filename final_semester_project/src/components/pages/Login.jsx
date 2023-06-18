import React from 'react';
import {useSession,signIn,signOut} from 'next-auth/react'

function Login(props) {
    const {data: session}=useSession();

        // if(session){
        //     return <div>{session.user.email}</div>
        // }
            return <div><p>Not signed in</p>
            <button onClick={()=>signIn()}>Sign in</button>
            </div>
        

}

export default Login;
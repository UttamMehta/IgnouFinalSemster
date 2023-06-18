
import React from 'react';
import {useSession ,signIn,signOut} from 'next-auth/react'
import style from "./Board.module.css"
import Dashboard from '../Dashboard/Dashboard';

function Board(props) {
const {data:session}=useSession();
// if(session){
//      <Dashboard />
// }

    return (
        <div className={style.board_1stdiv}>

            <div><h1>Board.</h1></div>
            <div>
            <div>
                <div>
                <h2>Sign In</h2> 
                <b>Sign in to your account</b>
                </div>
        
                    <p>Sign in with Google</p>
               

                <div>
                    <form>
                        <label>
                           <p> Email address</p> 
                            <input placeholder='Enter your email' />
                        </label>
                        <br/>
                        <label>
                            Password <br />
                            <input placeholder='Enter your password' type="password"/>
                        </label>
        <br/>
        <span>Forgot password?</span>
        <br/>
        <button>Sign In</button>

                    </form>

                    <p>Don't have an account ?<span> Register here</span></p>
                </div>
                </div>
                </div>
        </div>
    );
}

export default Board;
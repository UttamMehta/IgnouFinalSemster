import React from 'react';
import SignUp from '../components/signup';
import {Route,Routes} from "react-router-dom"

function Router(props) {
    return (
        <div>
            <Routes>
                <Route path="/signup"  element={<SignUp/>}/>
            </Routes>  
        </div>
    );
}

export default Router;
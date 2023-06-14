
import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


function Accuracy({test,timeup,ne}) {
const arr=[`a`,`s`,`d`,`f`,`j`,`k`,`l`,";"];
const [i,setI]=useState(0);
// cont [i,setI]=useState(0);
const [right,setRight]=useState(0);
const [wrong,setWrong]=useState(0);
const [state,setState]=useState("");
// const ref=useRef(null);

const [accuracy,setAccuracy]=useState(0);
useEffect(()=>{

    setTimeout(()=>{
        setState("");
    },500)

    if(!timeup)
    {
       let total=right+wrong
        let z=Math.round((right/total)*100);
        setAccuracy(z);
    }
 
    if(ne){
        setRight(0);
        setWrong(0);
    }

},[right,wrong,timeup,ne])


function check(e){
    // console.log(e.target.value+" "+arr[i]);
    const {value}=e.target;
   
    if(state.length===0)
{setState(value);
if(arr[i]===value||(i>7&&value===";")){
    setRight(prev=>prev+1);
    setI(Math.floor(Math.random()*10));
}

else
setWrong(prev=>prev+1);
}



// ref.current.value=""

}



    return (
        <div>
            {test?
            
            <div>{timeup?
            <h4>Enter the key <span style={{color:"red"}}> {i>7?arr[7]:arr[i]} </span>in lowercase
            <br/>
            <br/>
            <input name="typing"  onChange={check} style={{height:"24px"}} value={state} /><br/>
           
            
          
          <p>{wrong>0?`Wrong key pressed ${wrong} times`:<>Not pressed any wrong keys</>}</p>
          <p>Right key pressed {right} times</p>
            </h4>
            :<h4>Accuracy:{accuracy>0?` ${accuracy} %`:<span>Test is not completed</span>}</h4>}
            </div>:
            
            
            
            <h5>User can start test by clicking on start button</h5>}
            
        </div>
    );
}

export default Accuracy;
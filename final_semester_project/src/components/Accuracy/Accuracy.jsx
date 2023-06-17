
import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Kyboard from '../Keyboard/Kyboard';


function Accuracy({test,timeup,ne}) {
const arr=[`a`,`s`,`d`,`f`,`j`,`k`,`l`,";"];
const [i,setI]=useState(0);
const [right,setRight]=useState(0);
const [wrong,setWrong]=useState(0);
const [state,setState]=useState("");
const [accuracy,setAccuracy]=useState(0);
const [total,setTotal]=useState(0);

useEffect(()=>{

    setTimeout(()=>{
        setState("");
    },500)

  
       let total=right+wrong
        let z=Math.round((right/total)*100);
        setAccuracy(z);
    
    if(ne){
        setRight(0);
        setWrong(0);
        setAccuracy(0);
        setTotal(0);
    }

},[right,wrong,timeup,ne,total])


function check(e){
    const {value}=e.target;
   
    if(state.length===0)
{setState(value);
if(arr[i]===value||(i>7&&value===";")){
    setRight(prev=>prev+1);
    let ran=Math.floor(Math.random()*10)
    ran=ran>=7?7:ran;
    setI(ran);
}

else{
alert(`Incorrect Key pressed. Press  ${arr[i]} instead of  ${value}`)
setState("");
setWrong(prev=>prev+1);}
}

setTotal(prev=>prev+1)
}



    return (
        <div>
            {test?
            
            <div>
            <h4>Enter the key <span style={{color:"red"}}> {i>7?arr[7]:arr[i]} </span>
            <br/>
            <br/>
            <input name="typing"  onChange={check} style={{height:"48px",width:"100%",fontSize:"24px" }} value={state}  /><br/>
          
          {/* <p>{wrong>0?`Wrong key pressed ${wrong} times`:<>Not pressed any wrong keys</>}</p>
          <p>Right key pressed {right} times</p>
            </h4>
            :<h4>Accuracy:{accuracy?accuracy:0} % */}
            </h4>
        

            <Kyboard arr={arr} i={i}/>
            </div>
            
            :<></>}
            <div style={{display:"flex",gap:"24px"}}>
            <h4>Accuracy:{accuracy?accuracy:0} %</h4>
            <h4>Total Key Pressed:{total}</h4>
            <h4>Correct Key Pressed:{right}</h4>
            <h4>Incorrect Key Pressed:{wrong}</h4>
            </div>
            
            
             {/* <h5>User can start test by clicking on start button</h5> */}
            
            
        </div>
    );
}

export default Accuracy;
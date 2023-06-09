import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import Accuracy from '../Accuracy/Accuracy';
import styles from "./Timer.module.css"

function Timer(props) {

    const [timemin,setTimeMin]=useState(4);
    const [timesec,setTimeSec]=useState(59);
    const [test,setTest]=useState(false);
    const [timeup,setTimeUp]=useState(true);
    const [ne,setNe]=useState(false);
    const time=useRef(false);

    useEffect(()=>{
        if(timesec===0&&timemin===0)
        {
            changeTimeCurrent()
            setTimeUp(false);
        }

        else if(timesec<=0&&timemin>0&&time.current){
            setTimeMin((prev)=>prev-1);
            setTimeSec(59);
        }

    },[timesec,timemin])

    function start(){
     
      if  (!time.current&&timesec!==0){    
        setTest(true)
        setTimeUp(true);
        setNe(false);

      time.current=setInterval(() => {
          setTimeSec(prev=>prev-1);          
      }, 1000);
    }
    }
    function reset(){
        changeTimeCurrent()
        setTimeMin(4);
        setTimeSec(59);
        setTimeUp(true);
        setTest(false);
        setNe(true);
    }

    function stop(){
        changeTimeCurrent();
        setTimeUp(false);
        setTest(false)
    }

    function changeTimeCurrent(){
        clearInterval(time.current)
        time.current=false;
    }

    return (
        <div>
            <div style={{
                display:"flex",flexDirection:"column",gap:"10%",width:"100%",alignItems:"center",justifyContent:"center"}}>
                   <div className={styles.time} style={{backgroundColor:"blue",padding:"10px 36px 10px 36px",marginTop:"10px",borderRadius:"16px"}}>
                <h3>
            {timemin<=9?`  0${timemin}`:` ${timemin}`}:{timesec<=9?`0${timesec}`:`${timesec}` } min</h3><br/>
            <div className={styles.div} style={{gap:"16px"}}> <button onClick={start} 
            
           ><>Start</></button>
            <button onClick={reset} >Reset</button>
            <button onClick={stop} >Pause</button>
           </div></div>
           <b style={{padding:"15px"}}>User should keep his left fingers on A S D F and right finger on J K L ; respectively</b>
            <br/>
            <Accuracy test={test} timeup={timeup} ne={ne} />
            </div>
        </div>
    );
}

export default Timer;
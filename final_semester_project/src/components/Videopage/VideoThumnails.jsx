import React, { useEffect, useState } from 'react'
import Loading from '../Loader/Loading';

export default function VideoThumnails() {
const [data,setData]=useState([]);

useEffect(()=>{

},[])
  return (
    <div>

        {data.length===0?<Loading/>:data.map((el,i)=>{
            <img src={el.img} alt="el.id" />
        })}
    </div>
  )
}

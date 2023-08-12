import React, { useEffect, useState } from 'react'
import Loading from '../Loader/Loading';
import { Link } from 'react-router-dom';

export default function VideoThumnails() {
const [data,setData]=useState([]);
const [page,setPage]=useState(1);
const [quary,setQuary]=useState("Bca 1st Semster");

useEffect(()=>{
    let url="";
   getData(url);


},[quary,page])

function getData(url){
    let req=fetch(url);
    let res=req.json();
    // setData(res);
    console.log(res);
}


  return (
    <div>

        {data.length===0?<Loading/>:data.map((el,i)=>{
      <Link to="/play"> <img src={el.snippet.thumbnails} alt="el.snippet.channelId" /></Link> 
        })}
    </div>
  )
}

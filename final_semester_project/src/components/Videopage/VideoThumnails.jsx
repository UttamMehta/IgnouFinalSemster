import React, { useEffect, useState } from 'react'
import Loading from '../Loader/Loading';
import { Link } from 'react-router-dom';

export default function VideoThumnails() {
const [data,setData]=useState([]);
const [page,setPage]=useState(1);
const [quary,setQuary]=useState("Bca 1st Semster");

useEffect(()=>{
    let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${quary}&key=AIzaSyCWFfdxzshap5vCja1ic4qbz7SjMLVBB1w`;
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
      <div>
        <div>
          <select name="" id="">
            <option value="Bca 1st Semester">1st Semseter</option>
            <option value="Bca 2nd Semester">2nd Semester</option>
            <option value="Bca 3rd Semester">3rd Semester</option>
            <option value="Bca 4th semester">4th Semester</option>
            <option value="Bca 5th Semester">5th Semester</option>
            <option value="Bca 6th Semester">6th Semester</option>
          </select>
        </div>
      </div>
    <div>

        {data.length===0?<Loading/>:data.map((el,i)=>{
      <Link to="/play"> <img src={el.snippet.thumbnails} alt="el.snippet.channelId" /></Link> 
        })}
    </div>
    </div>
  )
}

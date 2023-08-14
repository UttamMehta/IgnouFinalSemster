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
},[quary])

async function getData(url){
  try {
    let req=await fetch(url);
    let res=await req.json();
    // setData(res);
    console.log(res.items);
    setData(res.items);
  } catch (error) {
    console.log(error);
  }
   
}


function updateQuary(e){
setQuary(e.target.value);
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
        {/* <div>
         <select name="" id=""></select>
        </div> */}
      </div>
    <div>

        {data.length===0?<Loading/>:data.map((el,i)=>{
        
      return <Link to="/play" key={el.etag} style={{display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"10px"}}> <img src={el.snippet.thumbnails.high.url} alt="el.snippet.channelId" key={el.id.videoId} style={{width:"60%",gap:"10px",height:"100%"}}/></Link> 
        })}
    </div>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import Loading from '../Loader/Loading';
import { Link } from 'react-router-dom';
import reduxThunkActionCreator from "../../Redux/Redux_Pipeline/Youtube";
import {useDispatch,useSelector} from "react-redux";

export default function VideoThumnails() {
  const dispatch = useDispatch();
const [data,setData]=useState([]);
const [page,setPage]=useState(1);
const [quary,setQuary]=useState("Ignou Bca 1st Semster");
// const electronicData = useSelector((storeData) => {
//   return storeData.thumbnails;
// });
// console.log(electronicData);
// console.log(useSelector((store)=>{return store}))

useEffect(()=>{
    let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${quary}&key=AIzaSyCWFfdxzshap5vCja1ic4qbz7SjMLVBB1w`;
   getData(url);
  // dispatch(
  //   reduxThunkActionCreator(
  //     url
  //   )
  // );
},[quary])

async function getData(url){
  try {
    let req=await fetch(url);
    let res=await req.json();
    // setData(res);
    console.log(res.items);
    setData(res.items);
  } catch (error) {
    // console.log(error);
    alert(error);
  }

   
}


function updateQuary(e){
  setData([]);
setQuary(e.target.value);
}

  return (
    <div>
      <div>
        <div style={{alignItems:"center",margin:"auto",display:"flex",justifyContent:"center",marginBottom:"10px",gap:"10px"}}>
        Apply Filter <select name="" id="" onChange={updateQuary}>
            <option value="Ignou Bca 1st Semester">1st Semseter</option>
            <option value="Ignou Bca 2nd Semester">2nd Semester</option>
            <option value="Ignou Bca 3rd Semester">3rd Semester</option>
            <option value="Ignou Bca 4th semester">4th Semester</option>
            <option value="Ignou Bca 5th Semester">5th Semester</option>
            <option value="Ignou Bca 6th Semester">6th Semester</option>
          </select>
        </div>
        {/* <div>
         <select name="" id=""></select>
        </div> */}
      </div>
    <div>
        {data.length===0?<Loading/>:data.map((el,i)=>{
        
      return <Link to={`/play/${el.id.videoId}`} key={el.etag} style={{display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"10px"}}> <img src={el.snippet.thumbnails.high.url} alt="el.snippet.channelId" key={el.id.videoId} style={{width:"60%",gap:"10px",height:"100%"}}/></Link> 
        })}
    </div>
    </div>
  )
}

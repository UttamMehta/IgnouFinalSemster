import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function VideoPlaySingle() {
    const {id}=useParams();
    // console.log(id);
    // useEffect(()=>{

    // })



  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"10px"}}>
      
      <iframe width="900" height="500" src={`https://www.youtube.com/embed/${id}`} allowfullscreen></iframe>
    </div>
  )
}

import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function VideoPlaySingle() {
    const {id}=useParams();
    // console.log(id);
    useEffect(()=>{
        
    })



  return (
    <div>
      <iframe width="640" height="360" src="https://www.youtube.com/embed/JQlBt1bXUUc" title="" allowfullscreen></iframe>
    </div>
  )
}

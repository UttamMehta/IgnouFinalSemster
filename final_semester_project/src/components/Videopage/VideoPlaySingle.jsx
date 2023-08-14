import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function VideoPlaySingle() {
    const {id}=useParams();
    console.log(id);
  return (
    <div>
      <iframe width="640" height="360" src="https://www.youtube.com/embed/JQlBt1bXUUc" title="Deewane Hum Nahi Hote Deewani Raat Aati Hai | Stebin Ben ( Selfie) Akshay Kumar |Jacqueline,Emraan H" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

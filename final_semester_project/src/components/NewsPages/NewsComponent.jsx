// src/components/NewsComponent.js
import React, { useEffect, useState } from 'react';
import './NewsComponent.css';

const [country,setCountry]=useState("");
const [page,setPage]=useState(1);
const [search,setSearch]=useState("");


useEffect(()=>{
    let url;
    

    if(country&&search&&page){
        url=`https://newsapi.org/v2/top-headlines?country=us&q=${search}&pageSize=5&page=${page}&apiKey=faa66530b2cf4a658d67d49a15a05023`
    }
    else if(search&&page)
    url=`https://newsapi.org/v2/everything?q=${search}&pageSize=5&page=${page}&apiKey=faa66530b2cf4a658d67d49a15a05023`
else
url=`https://newsapi.org/v2/everything?q=latest&pageSize=5&page=${page}&apiKey=faa66530b2cf4a658d67d49a15a05023`;

},[country,search,page])




function NewsComponent() {
  return (
    <div className="news-container">
      {newsItems.map((item, index) => (
        <div className="news-item" key={index}>
          <img src={item.image} alt={`News ${index + 1}`} />
          <h2>{item.title}</h2>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
}

export default NewsComponent;

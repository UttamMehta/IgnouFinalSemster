// src/components/NewsComponent.js
import React, { useEffect, useState } from 'react';
import styles from "./NewsComponent.module.css";

const [country,setCountry]=useState("");
const [page,setPage]=useState(1);
const [search,setSearch]=useState("");


useEffect(()=>{
    let url;

    if(country&&search){
        url=`https://newsapi.org/v2/top-headlines?country=${country}&q=${search}&pageSize=5&page=${page}&apiKey=faa66530b2cf4a658d67d49a15a05023`
    }
    else if(search)
    url=`https://newsapi.org/v2/everything?q=${search}&pageSize=5&page=${page}&apiKey=faa66530b2cf4a658d67d49a15a05023`
else if(country){
    url=`https://newsapi.org/v2/top-headlines?country=${country}&pageSize=5&page=${page}&apiKey=faa66530b2cf4a658d67d49a15a05023`
}
else
url=`https://newsapi.org/v2/everything?q=latest news&pageSize=5&page=${page}&apiKey=faa66530b2cf4a658d67d49a15a05023`;

},[country,search,page])


if(newsItems.lenght===0)
return <h1 style={{color:"green"}}>Data is Loading...</h1>

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
      <div className="pagination">
       <button onClick={()=>setPage(prev=>prev-1)} disabled={page<=1?true:false}>Prev</button>
       <h4>{page}</h4>
       <button onClick={()=>setPage(prev=>prev+1)} disabled={page*5>=totalResults?true:false}>Next</button>
      </div>
    </div>
  );
}

export default NewsComponent;

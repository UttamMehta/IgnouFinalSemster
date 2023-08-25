// src/components/NewsComponent.js
import React, { useEffect, useRef, useState } from 'react';
import styles from "./News.module.css";
import { Navigate } from 'react-router-dom';



// if(newsItems.lenght===0)
// Navigate to <h1 style={{color:"green"}}>Data is Loading...</h1>;

function NewsComponent() {

    const [country,setCountry]=useState("");
const [page,setPage]=useState(1);
const [search,setSearch]=useState("");
const [newsItems,setNewsItems]=useState([]);
const [totalResults,setTotalResults]=useState(0);
const ref=useRef("");


useEffect(()=>{
    let url;
    setNewsItems([]);

    if(country&&search){
        url=`https://newsapi.org/v2/everything?q=${search}&pageSize=8&page=${page}&apiKey=faa66530b2cf4a658d67d49a15a05023`
    }
    else if(search)
    url=`https://newsapi.org/v2/everything?q=${search}&pageSize=8&page=${page}&apiKey=faa66530b2cf4a658d67d49a15a05023`
else if(country){
    url=`https://newsapi.org/v2/top-headlines?country=${country}&pageSize=8&page=${page}&apiKey=faa66530b2cf4a658d67d49a15a05023`
}
else
url=`https://newsapi.org/v2/everything?q=latest news&pageSize=8&page=${page}&apiKey=faa66530b2cf4a658d67d49a15a05023`;
getData(url);

},[country,search,page])

async function getData(url){
    let req=await fetch(url);
    let res=await req.json();

    setTotalResults(res.totalResults);
    setNewsItems(res.articles);
    // console.log(res);
}

function truncateText(text, maxWords) {
    const words = text.split(' ');
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    }
    return text;
  }

//   if(newsItems.length===0){
    
//   }

function changeSearch(e){
    setNewsItems([]);
    setPage(1);
if(ref.current)
clearTimeout(ref.current);
ref.current=setTimeout(()=>{
setSearch(e.target.value);
},2000)

}


  return (
    <div className={styles.all}>
        <div className={styles.sort}>
        <input placeholder='Enter Your Search' onChange={changeSearch}/>
        <select onChange={(e)=>{
            setPage(1);
            setCountry(e.target.value)}}>
            <option value="">All World News</option>
            <option value="in">India News</option>
            <option value="us">USA News</option>
            <option value="as">Australia News</option>
            <option value="nz">New Zealand News</option>
        </select>
        </div>
    <div className={styles.newscontainer} >
      {newsItems.length===0?<h1 style={{display:"flex",alignItems:"center",justifyContent:"center",margin:"auto",color:"gray"}}>Data is Loading...</h1>
      :newsItems.map((item, index) => (
        <div className={styles.newsitem} key={index}>
          <img src={item.urlToImage} alt={`News ${index+1}`} />
          <h2>{truncateText(item.title, 5)}</h2>
          <p>Author:{item.author}</p>
        </div>
      ))}</div>
      <div className={styles.pagination} style={{display:"flex",height:"40px",alignItems:"center",gap:"10px",justifyContent:"center"}}>
       <button style={{width:"100px",padding:"4px",borderRadius:"8px"}} onClick={()=>setPage(prev=>prev-1)} disabled={page<=1?true:false}>Prev</button>
       <h4>{page}</h4>
       <button style={{width:"100px",padding:"4px",borderRadius:"8px"}} onClick={()=>setPage(prev=>prev+1)} disabled={page*8>=totalResults?true:false}>Next</button>
      </div>
      </div>
  );
}

export default NewsComponent;

import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';

const Blog = () => {
 const [pokemon,setPokemon]=useState([]);

  useEffect(()=>{
    const num = Math.floor(Math.random()*151);
    console.log(num);
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=3&offset=${num}`)
    .then(res=>res.json())
    .then(data=>{
      setPokemon(data.results);
    })
  },[])

    return (   <div>
        <h2>Blog</h2>
        <ul>
            {
              pokemon.map((item,index)=><li key={index}><Link to={`/pokemon/${item.name}`}> {item.name}</Link></li>)
            }
        </ul>
       </div>
);
}
 
export default Blog;
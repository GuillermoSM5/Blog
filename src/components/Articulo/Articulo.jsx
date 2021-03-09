import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Style from 'styled-components';

const Articulo = () => {
    const {name} = useParams();
    const [pokemon,setPokemon]=useState({});

    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(res=>res.json())
        .then(data=>{
          setPokemon(data.sprites);
        })
      },[])

  console.log(pokemon)
    return (  
     <ContenedorPokemon>
       <img src={pokemon.back_default} alt=""/>
       <img src={pokemon.front_default} alt=""/>
       <img src={pokemon.front_shiny} alt=""/>
       <img src={pokemon.back_shiny} alt=""/>
     </ContenedorPokemon>        
    );
}

const ContenedorPokemon = Style.div`
    display: flex;
    justify-content: space-around;
`;
 
export default Articulo;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Style from 'styled-components';
import Error404 from '../Error404/Error404';

const Articulo = () => {
	const { name } = useParams();
	const [pokemon, setPokemon] = useState({});
	const [error, setError] = useState(false);

	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) => {
			if (res.ok) {
				setError(false);
				return res.json().then((data) => setPokemon(data.sprites));
			} else setError(true);
		});
	}, [name]);

	return (
		<ContenedorPokemon>
			{error && <Error404 />}
			<img src={pokemon.back_default} alt='' />
			<img src={pokemon.front_default} alt='' />
			<img src={pokemon.front_shiny} alt='' />
			<img src={pokemon.back_shiny} alt='' />
		</ContenedorPokemon>
	);
};

const ContenedorPokemon = Style.div`
    display: flex;
    justify-content: space-around;
`;

export default Articulo;

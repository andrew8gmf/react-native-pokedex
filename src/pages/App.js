import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../components/Header';
import PokemonList from '../components/PokemonList';

export default function App() {
  const [pokemonData, setPokemonData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPokemon();
  }, []);

  async function getPokemon() {
    await axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=150')
      .then(function (response) {
        const { data } = response;
        const { results } = data;
        const newPokemonData = {};
        results.forEach((pokemon, index) => {
          newPokemonData[index + 1] = {
            id: index + 1,
            name: pokemon.name,
            sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              index + 1
            }.png`,
          };
        });
        setPokemonData(newPokemonData);
        setLoading(false);
      });
  };

  return (
    <>
      <Header/>
      <PokemonList
        pokemonData={pokemonData}
        loading={loading}
      />
    </>
  );
}
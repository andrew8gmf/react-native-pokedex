import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonList from '../components/PokemonList';

export default function App() {
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getData();
  },[]);
  
  async function getData() {
    await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=' + offset).then(res => {
      setPokemons(pokemons.concat(res.data.results));
    });
  }

  function handleLoadMore() {
    setLoading(true);
    setOffset(offset + 20);
    getData();
  }

  return (
    <>
      <PokemonList 
        pokemons={pokemons}
        handleLoadMore={handleLoadMore}
        loading={loading}
      />
    </>
  );

}
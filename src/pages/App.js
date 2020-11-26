import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import axios from 'axios';
import PokemonList from '../components/PokemonList';
import Pagination from '../components/Pagination';

export default function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setLoading(false);
      setNextPageUrl(res.data.next);
      setPrevPageUrl(res.data.previous);
      setPokemon(res.data.results.map(p => p.name));
    });

    return () => cancel();
  }, [currentPageUrl]);

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl);
  }

  if (loading) {
    return (
      <Text>Loading...</Text>
    )
  } else {
    return (
      <>
        <PokemonList pokemon={pokemon} />
        <Pagination
          gotoNextPage={nextPageUrl ? gotoNextPage : null}
          gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
        />
      </>
    );
  }
}
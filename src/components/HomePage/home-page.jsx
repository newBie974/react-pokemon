import React, { useState, useEffect } from 'react';

import pokeApi from '../../api/pokemon';

import Card from '../../modules/Card/card';
import Search from '../../modules/Search/search';

import styles from './home-page.module.css';

const HomePage = ({
  ...rest
}) => {
  const [pokemon, setPokemons] = useState([]);
  const [pokemonFiltered, setPokemonFiltered] = useState([]);
  const [choosenPokemon, setChoosenPokemon] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [search, setSearch] = useState('');

  const handleChoosenPokemon = (name) => {
    setSelectedCard('cardselected')
    setChoosenPokemon(name);
  }

  const handleUpdateSearch = (event) => {
    setSearch(event.target.value);
    if (!event.target.value) {
      setPokemonFiltered(pokemon);
    } else {
      const filteredList = pokemon
        .filter(({ name }) => name.startsWith(event.target.value));
      setPokemonFiltered(filteredList);
    }
  }

  useEffect(() => {
    (async function setApiPokemon() {
      const pokemonFromApi = await pokeApi();
      setPokemons(pokemonFromApi);
      setPokemonFiltered(pokemonFromApi);
    })()
  }, []);

  return (
    <section className={styles.homepage}>
      <Search value={search} onChange={handleUpdateSearch} className={styles.search}/>
      { choosenPokemon &&
        <h2> Vous avez choisi {choosenPokemon} </h2>
      }
      { pokemon && pokemon.length
        ?
        <div className={styles.cards}>
          { pokemonFiltered.map(({ id, name, link }) =>
            <Card
              key={id}
              name={name}
              link={link}
              number={id}
              theme={selectedCard}
              onClick={() => handleChoosenPokemon(name)} />) }
        </div>
        : <h2> Aucun pokémon de disponible... </h2>
      }
      {/* <p>{clickCount}</p>
      <Button theme='brown' size='full' onClick={handleClick} /> */}
    </section>
  )
}

export default HomePage;

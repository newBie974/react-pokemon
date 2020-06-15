import React, { useState, useEffect } from 'react';

import pokeApi from '../../api/pokemon';

import Card from '../../modules/Card/card';

import styles from './home-page.module.css';

const HomePage = ({
  ...rest
}) => {
  const [pokemon, setPokemons] = useState([]);
  const [choosenPokemon, setChoosenPokemon] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleChoosenPokemon = (name) => {
    setSelectedCard('cardselected')
    setChoosenPokemon(name);
  }

  useEffect(() => {
    (async function setApiPokemon() {
      const pokemonFromApi = await pokeApi();
      setPokemons(pokemonFromApi);
    })()
    // setTimeout(() => {
    //   setPokemons([
    //     { id: '001', name: 'Bulbizare' },
    //     { id: '002', name: 'Florizare' },
    //     { id: '003', name: 'Pikachu' },
    //     { id: '004', name: 'Dracaufeu' },
    //   ]);
    // }, 3000);
  }, []);
  return (
    <section className={styles.homepage}>
      { pokemon && pokemon.length
        ?
        <div className={styles.cards}>
          { pokemon.map(({ id, name, link }) =>
            <Card
              key={id}
              name={name}
              link={link}
              number={id}
              theme={selectedCard}
              onClick={() => handleChoosenPokemon(name)} />) }
        </div>
        : <h2> Aucun pokémon de disponible, en cours de chargement... </h2>
      }
      
      { choosenPokemon &&
        <h2> Vous avez choisi {choosenPokemon} </h2>
      }
      {/* <p>{clickCount}</p>
      <Button theme='brown' size='full' onClick={handleClick} /> */}
    </section>
  )
}

export default HomePage;

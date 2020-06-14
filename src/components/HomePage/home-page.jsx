import React, { useState, useEffect } from 'react';

import Card from '../../modules/Card/card';
// import Button from '../../modules/Button/button';

import styles from './home-page.module.css';

const HomePage = ({
  ...rest
}) => {
  const [pokemon, setPokemons] = useState([]);
  const [choosenPokemon, setChoosenPokemon] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setPokemons([
        { id: '001', name: 'Bulbizare' },
        { id: '002', name: 'Florizare' },
        { id: '003', name: 'Pikachu' },
        { id: '004', name: 'Dracaufeu' },
      ]);
    }, 3000);
  }, []);

  const handleChoosenPokemon = (name) => {
    setChoosenPokemon(name);
  }
  return (
    <section className={styles.homepage}>
      { !pokemon.length &&
        <h2> Aucun pokémon de disponible, en cours de chargement... </h2>
      }
      <div className={styles.cards}>
        { pokemon.map(({ id, name, link }) =>
          <Card
            key={id}
            name={name}
            link={link}
            number={id}
            onClick={() => handleChoosenPokemon(name)} />) }
      </div>
      { choosenPokemon &&
        <h2> Vous avez choisi {choosenPokemon} </h2>
      }
      {/* <p>{clickCount}</p>
      <Button theme='brown' size='full' onClick={handleClick} /> */}
    </section>
  )
}

export default HomePage;

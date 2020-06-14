import PropTypes from 'prop-types';
import React from 'react';

import styles from './card.module.css';

import Avatar from '../Avatar/avatar';

const Card = ({
  name,
  img,
  number,
  ...rest
}) => {
  return (
    <div className={styles.card} {...rest}>
      <Avatar link={img}/>
      <div className={styles.container}>
        <h4>{number}</h4>
        <p>{name}</p>
      </div> 
    </div>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
}

Card.defaultProps = {
  name: 'card name'
}
export default Card;

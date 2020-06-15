import PropTypes from 'prop-types';
import React from 'react';

import styles from './card.module.css';

import Avatar from '../Avatar/avatar';

const Card = ({
  name,
  img,
  number,
  theme,
  ...rest
}) => {
  return (
    <div
      className={`${styles.card} ${styles[theme]}`} {...rest}>
      <Avatar link={img} name={name}/>
      <div className={styles.container}>
        <h4>{number}</h4>
        <p>{name}</p>
      </div> 
    </div>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string,
  theme: PropTypes.oneOf([
    'cardselected'
  ])
}

Card.defaultProps = {
  name: 'card name',
  number: 'number'
}
export default Card;

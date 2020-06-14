import PropTypes from 'prop-types';
import React from 'react';
import styles from './avatar.module.css';

const Avatar = ({
  link,
  name
}) => {
  return (
    <img src={link} className={styles.avatar}alt={name}/>
  )
}

Avatar.propTypes = {
  link: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
}

Avatar.defaultProps = {
  name: 'default',
  link: 'https://i.picsum.photos/id/1062/5092/3395.jpg?hmac=o9m7qeU51uOLfXvepXcTrk2ZPiSBJEkiiOp-Qvxja-k'
}

export default Avatar;

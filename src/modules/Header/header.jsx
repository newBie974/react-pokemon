import React from 'react';
import styles from './header.module.css'

const Header = ({
  ...rest
}) => {
  const arr = ['value 1', 'value 2', 'value 3'];
  return (
    <nav className={styles.header}>
      { arr.map((el) => <div key={el}>{el}</div>) }  
    </nav>
  )
}

export default Header;

import React from 'react';
import styles from './header.module.css'

const Header = ({
  ...rest
}) => {
  const arr = ['value 1', 'value 2', 'value 3'];
  return (
    <header className={styles.header}>
      { arr.map((el) => <div className={styles.content} key={el}>{el}</div>) }  
    </header>
  )
}

export default Header;

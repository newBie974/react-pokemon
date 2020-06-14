import React from 'react';
import styles from './footer.module.css';

const Footer = ({
  ...rest
}) => {
  const bloc = ['block 1', 'block 2', 'block 3'];
  return (
    <footer className={styles.footer}>
      { bloc.map((el) => <div key={el}>{el}</div>)}
    </footer>
  )
}
export default Footer;

import React from 'react';
import {
  Link
} from "react-router-dom";

import styles from './nav.module.css';

const Nav = ({
  About,
  Homepage
}) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link to="/">Homepage</Link>
        </li>
        <li className={styles.li}>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;

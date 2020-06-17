import React from 'react';

import styles from './about.module.css';

const About = ({
  ...rest
}) => {
  
  return(
    <section className={styles.about}> Coucou about </section>
  )
}

export default About;

import PropTypes from 'prop-types';
import React from 'react';

import styles from './button.module.css';

const Button = ({
  label,
  name,
  theme,
  size,
  className,
  ...rest
}) => {
  return (
    <button
      data-testid="button"
      className={`${styles.toto} ${styles[theme]} ${styles[size]} ${className}`}
      name={name}
      {...rest}
      >
      {label}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  theme: PropTypes.oneOf([
    'brown',
    'yellow'
  ]),
  size: PropTypes.oneOf([
    'small',
    'medium',
    'large',
    'full'
  ]),
  className: PropTypes.string,
}

Button.defaultProps = {
  label: 'valeur du lable',
  size: 'medium'
}

export default Button;

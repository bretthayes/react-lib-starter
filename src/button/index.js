import React from 'react';

import styles from './button.module.scss';

const Button = props => {
  return (
    <>
      <button className={styles.root}>
        {props.children}
      </button>
    </>
  );
};

export { Button };

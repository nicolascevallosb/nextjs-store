import React from 'react';
import styles from './Loader.module.sass';

export const Loader = () => {
  return (
    <div className={styles.loader_wrapper}>
      <div className={styles.loader}>
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
      </div>
    </div>
  );
};
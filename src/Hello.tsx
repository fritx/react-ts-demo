import React from 'react';
import logo from './logo.svg';
import styles from './Hello.module.css';

const Hello: React.FC = () => {
  return (
    <div className={styles.Hello}>
      <header className={styles.HelloHeader}>
        <img src={logo} className={styles.HelloLogo} alt="logo" />
        <p>
          Edit <code>Hello.tsx</code> and save to reload.
        </p>
        <a
          className={styles.HelloLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default Hello;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './homePage.module.css';

function HomePage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('greeting-messages');
  };
  return (
    <section id={styles['home-container']}>
      <h1>This is a greeting App</h1>
      <button type="button" onClick={handleClick}>
        Press me to greet
      </button>
    </section>
  );
}

export default HomePage;

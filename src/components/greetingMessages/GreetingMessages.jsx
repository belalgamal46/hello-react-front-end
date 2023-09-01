import React from 'react';
import styles from './greeting.module.css';

function GreetingMessages() {
  const handleClick = () => {};
  return (
    <section id={styles['greeting-container']}>
      <h1 className={styles['greeting-title']}>Greeting Message</h1>
      <button type="button" onClick={handleClick}>
        Greetings
      </button>
    </section>
  );
}

export default GreetingMessages;

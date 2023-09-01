import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './greeting.module.css';
import { getRandomMessage } from '../../redux/greetingMessage/greetingApi';

function GreetingMessages() {
  const dispatch = useDispatch();
  const [successMessage, setSuccessMessage] = useState(false);
  const { greetingMessage, error } = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(getRandomMessage());
  }, [dispatch]);

  const handleClick = () => {
    dispatch(getRandomMessage());
    setSuccessMessage(true);

    setTimeout(() => {
      setSuccessMessage(false);
    }, 500);
  };
  return (
    <section id={styles['greeting-container']}>
      {successMessage && <p className={styles['success-message']}>Successfully</p>}
      {error.errorMessage && <p className={styles['error-message']}>{error.errorMessage}</p>}
      <h1 className={styles['greeting-title']}>{greetingMessage.message}</h1>
      <button type="button" onClick={handleClick}>
        Greetings
      </button>
    </section>
  );
}

export default GreetingMessages;

import { useState } from 'react';
import styles from './BookingForm.module.css';

const BookingForm = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); 

  const handleSubmit = (event) => {
    event.preventDefault();

    const nameInput = event.target.querySelector('input[type="text"]');
    const emailInput = event.target.querySelector('input[type="email"]');
    const dateInput = event.target.querySelector('input[type="date"]');

    const isValidName = nameInput.value.trim() !== '';
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
    const isValidDate = dateInput.value !== '';

    const selectedDate = new Date(dateInput.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0); 

    const isFutureDate = selectedDate > today;

    if (isValidName && isValidEmail && isValidDate && isFutureDate) {
      setIsFormSubmitted(true);
      setErrorMessage(''); 
    } else {
      if (!isFutureDate) {
        setErrorMessage('Please choose a future date.');
      } else {
        setErrorMessage('Invalid form data. Please fill out all required fields correctly.');
      }
      setIsFormSubmitted(false);
    }
  };

  return (
    <div className={styles.bookingForm}>
      <h3>Book your campervan now</h3>
      <p>Stay connected! We are always ready to help you.</p>
      {isFormSubmitted ? (
        <div className={styles.successMessage}>
          <p>Your booking request has been successfully submitted!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name*" required />
          <input type="email" placeholder="Email*" required />
          <input type="date" placeholder="Booking date*" required />
          <textarea placeholder="Comment" rows="4"></textarea>
          <button type="submit" className={styles.btnRed}>Submit</button>
        </form>
      )}
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>} 
    </div>
  );
};

export default BookingForm;
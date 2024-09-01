import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { enGB } from 'date-fns/locale';
import styles from './BookingForm.module.css';

const BookingForm = () => {
  const [startDate, setStartDate] = useState(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const nameInput = event.target.querySelector('input[type="text"]');
    const emailInput = event.target.querySelector('input[type="email"]');

    const isValidName = nameInput.value.trim() !== '';
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
    const isValidDate = startDate !== null;

    const selectedDate = startDate;
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
          <input type="text" placeholder="Name*" required className={styles.inputField} />
          <input type="email" placeholder="Email*" required className={styles.inputField} />
          <div className={styles.datePickerWrapper}>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              locale={enGB}
              placeholderText="Booking date*"
              minDate={new Date()}
              dateFormat="dd/MM/yyyy"
              className={styles.datePicker}
            />
          </div>
          <textarea placeholder="Comment" rows="4" className={styles.textarea}></textarea>
          <button type="submit" className={styles.btnRed}>Submit</button>
        </form>
      )}
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  );
};

export default BookingForm;
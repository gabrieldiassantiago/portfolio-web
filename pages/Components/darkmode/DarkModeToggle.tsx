import { useState, useEffect } from 'react';
import styles from './DarkModeToggle.module.css';

export default function DarkModeToggle() {
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkModeEnabled((prevMode) => !prevMode);
  };

  useEffect(() => {
    const body = document.body;
    if (isDarkModeEnabled) {
      body.classList.add(styles['dark-mode']);
    } else {
      body.classList.remove(styles['dark-mode']);
    }
  }, [isDarkModeEnabled]);

  return (
    <button onClick={toggleDarkMode}>
      {isDarkModeEnabled ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}

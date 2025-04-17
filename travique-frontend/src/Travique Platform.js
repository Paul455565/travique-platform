import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/')
      .then(response => response.text())
      .then(data => {
        console.log('Backend response:', data);
        setMessage(data);
      })
      .catch(error => {
        console.error('Error fetching from backend:', error);
        setMessage('Failed to fetch from backend');
      });
  }, []);

  return (
    <div className="App">
      <h1>Travique 🌍</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Calendar from './components/Calendar'

function App() {
  const now = new Date(1993, 0, 1);

  return (
    <Calendar date={now} />
  );
}

export default App;
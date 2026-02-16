import { useState } from 'react';
import './App.css';
import InputGroup from './components/InputGroup';
import ResultDisplay from './components/ResultDisplay';

export default function App() {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [age, setAge] = useState(null);
  const [error, setError] = useState('');

  const isValidDate = (day, month, year) => {
    const date = new Date(year, month - 1, day);
    return (
      date.getFullYear() === +year &&
      date.getMonth() === +month - 1 &&
      date.getDate() === +day &&
      date <= new Date()
    );
  };

  const calculateAge = (day, month, year) => {
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
    if (birthDate > today) return null;

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    return { years, months, days };
  };

  const handleSubmit = () => {
    if (!day || !month || !year) {
      setError('All fields are required');
      setAge(null);
      return;
    }

    if (!isValidDate(day, month, year)) {
      setError('Please enter a valid date');
      setAge(null);
      return;
    }

    const result = calculateAge(+day, +month, +year);
    if (!result) {
      setError('Date is in the future');
      setAge(null);
      return;
    }

    setError('');
    setAge(result);
  };

  return (
    <div className="card">
      <InputGroup
        day={day}
        month={month}
        year={year}
        setDay={setDay}
        setMonth={setMonth}
        setYear={setYear}
        onSubmit={handleSubmit}
      />

      {error && <p className="error">{error}</p>}

      <ResultDisplay age={age} />
    </div>
  );
}

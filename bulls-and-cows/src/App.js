import { useState, useEffect } from 'react';
import './App.css';
import generateRandomNumber from './random';

function App() {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());

  useEffect(() => {
    
  }, [randomNumber])

  return (
    <div className="App">
      <h1>숫자 야구 게임</h1>
      <header className="header">{randomNumber}</header>
      <section>
        <input/>
        <button>맞춰보기</button>
      </section>
      <h2>기록</h2>
      <ol>
        <li>1234 (strike: 0, ball: 2)</li>
        <li>4567 (strike: 1, ball: 1)</li>
        <li>7896 (strike: 1, ball: 1)</li>
      </ol>
    </div>
  );
}

export default App;

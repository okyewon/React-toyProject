import { useState, useEffect } from 'react';
import './App.css';
import generateRandomNumber from './random';

function App() {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    
  }, [randomNumber])

  const handleAnswerChanged = e => {
    setAnswer(e.target.value);
  }

  const handleSubmit = () => {
    // strike, ball, right
    const answers = answer.split('').map(item => Number(item));
    const { strike, ball } = randomNumber.reduce((prev, cur, idx) => {
      // strike
      if(answer[idx] === cur) {
        return {
          ...prev,
          strike: prev.strike + 1
        }
      }

      // ball
      if(answer.includes(cur)) {
        return {
          ...prev,
          strike: prev.strike + 1
        }
      }
    }, {
      strike: 0,
      ball: 0
    })
  }

  return (
    <div className="App">
      <h1>숫자 야구 게임</h1>
      <header className="header">{randomNumber}</header>
      <section>
        <input type="text" value={answer} onChange={handleAnswerChanged}/>
        <button onClick={handleSubmit}>맞춰보기</button>
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

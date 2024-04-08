import { useState, useEffect } from 'react';
import './App.css';
import generateRandomNumber from './random';

function App() {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [answer, setAnswer] = useState('');
  const [logs, setLogs] = useState([]);

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
      if(answers[idx] === cur) {
        return {
          ...prev,
          strike: prev.strike + 1
        }
      }

      // ball
      if(answer.includes(cur)) {
        return {
          ...prev,
          ball: prev.ball + 1
        }
      }

      return prev
    }, {
      strike: 0,
      ball: 0
    })

    setLogs([ ...logs, `${answer} (strike: ${strike}, ball: ${ball})` ])
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
        {
          logs.map((log, idx) => {
            return (
              <li key={`${log}_${idx}`}>{log}</li>
            )
          })
        }
      </ol>
    </div>
  );
}

export default App;

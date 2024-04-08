import { useState, useEffect } from 'react';
import './App.css';
import generateRandomNumber from './random';

function App() {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [answer, setAnswer] = useState('');
  const [logs, setLogs] = useState([]);
  const [isSuccess, setSuccess] = useState(false);
  console.log(randomNumber)

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

    if(strike === 4) {
      alert(`축하합니다. 정답입니다 !`);
      setSuccess(true);
      return;
    }

    setLogs([ ...logs, `${answer} (strike: ${strike}, ball: ${ball})` ])
  }

  const handleRetry = () => {
    setRandomNumber(generateRandomNumber())
    setAnswer('')
    setLogs([])
    setSuccess(false)
  }

  return (
    <div className="App">
      <h1>숫자 야구 게임</h1>
      <header className="header">
        {isSuccess ? `정답: ${answer}` : '----'}
      </header>
      <section>
        <input type="text" value={answer} onChange={handleAnswerChanged} disabled={isSuccess}/>
        {
          isSuccess ? (
            <button onClick={handleRetry}>다시하기</button>
          ) : (
            <button onClick={handleSubmit}>맞춰보기</button>
          )
        }
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

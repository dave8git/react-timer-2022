import { useEffect, useState} from 'react';
import Button from './components/Button/Button';
import FormattedTime from './components/FortmattedTime/FormattedTime';

const App = () => {

  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

  const reset = () => {
    setTime(0);
    setTimer(null);
  }

  const start = () => {
    setTimer(setInterval(() => {
      setTimer(prevValue => prevValue + 0.01);
    }, 10))
  };

  const stop = () => {
    clearInterval(timer);
    setTimer();
  }

  useEffect((timer) => {
    return (timer) => {
      if(timer) clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <FormattedTime time={time}>{time}</FormattedTime>
      <Button value={start}>START</Button>
      <Button value={stop}>STOP</Button>
      <Button value={reset}>RESET</Button>
    </div>
  );
};

export default App; 
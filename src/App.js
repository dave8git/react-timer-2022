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
      setTime(prevValue => prevValue + 0.01);
    }, 10))
  };

  const stop = () => {
    clearInterval(timer);
    setTimer(null);
  }

  useEffect(() => {
    return () => {
      if(timer) clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <FormattedTime time={time}>{time}</FormattedTime>
      <Button function={start}>START</Button>
      <Button function={stop}>STOP</Button>
      <Button function={reset}>RESET</Button>
    </div>
  );
};

export default App; 
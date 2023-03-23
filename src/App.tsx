import { useState } from "react";
import FormPage from "./components/FormPage/FormPage";
import SleepPage from "./components/SleepPage/SleepPage";
import "./App.css";

function App() {
  const [sleep, setSleep] = useState({
    mode: "",
    time: "",
  });
  const [addSleep, setAddSleep] = useState(true);
  const [fallAsleep, setFallAsleep] = useState(15);
  const [startMenu, setStartMenu] = useState(true);

  const handleExtraSleep = () => {
    setAddSleep((prevState) => !prevState);
  };

  const handleAsleepMins = (mins: number) => {
    if (mins < 1) setFallAsleep(1);
    else if (mins > 60) setFallAsleep(60);
    else setFallAsleep(Math.abs(mins));
  };

  return (
    <div className='App'>
      <div className='App--header'>Sleep Calculator🌙</div>
      <div className='App--body'>
        {startMenu ? (
          <FormPage setSleep={setSleep} setStartMenu={setStartMenu} />
        ) : (
          <SleepPage sleep={sleep} fallAsleep={fallAsleep} addSleep={addSleep} />
        )}
      </div>
      <div className='App--add-sleep-time'>
        <input
          type='checkbox'
          name='App--sleep-checkbox'
          id='App--sleep-checkbox'
          checked={addSleep}
          onChange={handleExtraSleep}
        />
        <label htmlFor='App--sleep-checkbox'>
          <span className='App--sleep-checkbox-text'>Include</span>
        </label>
        <input
          type='number'
          name='App--fall-asleep-mins'
          id='App--fall-asleep-mins'
          min={1}
          max={60}
          value={fallAsleep}
          onChange={(e) => handleAsleepMins(parseInt(e.target.value))}
          className='App--fall-asleep-mins'
        />
        <label
          htmlFor='App--fall-asleep-mins'
          className='App--sleep-checkbox-text'
        >
          minutes to fall asleep
        </label>
      </div>
      {!startMenu && (
        <div className='App--restart'>
          <button onClick={() => setStartMenu(true)}>Start over</button>
        </div>
      )}
      <div className='App--footer'>
        <a
          href='https://github.com/robsassack/sleep-calc-react/'
          aria-label='GitHub repository link'
        >
          <i className='fa-brands fa-github github-logo'></i>
        </a>
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import FormPage from "./components/FormPage/FormPage";
import SleepPage from "./components/SleepPage/SleepPage";
import "./App.css";

function App() {
  const [sleep, setSleep] = useState({
    mode: "",
    time: "",
  });
  const [fallAsleep, setFallAsleep] = useState(15);
  const [startMenu, setStartMenu] = useState(true);

  return (
    <div className='App'>
      <div className='App--header'>Sleep Calculator🌙</div>
      <div className='App--body'>
        {startMenu ? <FormPage></FormPage> : <SleepPage></SleepPage>}
      </div>
      <div className='App--footer'>
        <a href='https://github.com/robsassack/sleep-calc-react/'>
          <i className='fa-brands fa-github github-logo'></i>
        </a>
      </div>
    </div>
  );
}

export default App;

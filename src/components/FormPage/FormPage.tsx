import { useState } from "react";
import "./FormPage.css";

function FormPage(props: any) {
  const [wakeTime, setWakeTime] = useState("");
  const [sleepTime, setSleepTime] = useState("");

  const handleSleep = (mode: string) => {
    if (mode === "now") {
      // get current time
      const now = new Date();
      const time = `${now.getHours()}:${now.getMinutes()}`;
      props.setSleep({ mode: "now", time });
      console.log("Sleep now");
    } else if (mode === "wake") {
      if (wakeTime === "") return;
      props.setSleep({ mode: "wake", time: wakeTime });
      console.log("Wake at", wakeTime);
    } else if (mode === "sleep") {
      if (sleepTime === "") return;
      props.setSleep({ mode: "sleep", time: sleepTime });
      console.log("Sleep at", sleepTime);
    }
    props.setStartMenu(false);
  };

  return (
    <div className='form'>
      <div className='form--option-container'>
        <h2>Sleep now...</h2>
        <span>Press this button if you are going to sleep now</span>
        <button
          className='form--sleep-now-btn'
          onClick={() => handleSleep("now")}
        >
          Sleep now
        </button>
      </div>
      <div className='form--option-container'>
        <h2>Wake up at...</h2>
        <span>Enter the time you want to wake up at</span>
        <div className='form--input-container'>
          <input
            type='time'
            name='wake-at-input'
            id='wake-at-input'
            aria-label='Time to wake up at'
            value={wakeTime}
            onChange={(e) => setWakeTime(e.target.value)}
          />
          <button onClick={() => handleSleep("wake")}>Go</button>
        </div>
      </div>
      <div className='form--option-container'>
        <h2>Sleep at...</h2>
        <span>Enter the time you will go to sleep</span>
        <div className='form--input-container'>
          <input
            type='time'
            name='sleep-at-input'
            id='sleep-at-input'
            aria-label='Time to go to sleep'
            value={sleepTime}
            onChange={(e) => setSleepTime(e.target.value)}
          />
          <button onClick={() => handleSleep("sleep")}>Go</button>
        </div>
      </div>
    </div>
  );
}

export default FormPage;

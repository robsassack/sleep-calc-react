import "./SleepPage.css";

function SleepPage(props: any) {
  let extraSleep = 0;
  if (props.addSleep) extraSleep = props.fallAsleep;

  const formatTime = (time: string) => {
    // convert 24h to 12h
    const timeArr = time.split(":");
    let hours = parseInt(timeArr[0]);
    let minutes = timeArr[1];
    let ampm = "AM";
    if (hours > 12) {
      hours -= 12;
      ampm = "PM";
    }
    // if (Number(minutes) < 10) minutes = "0" + minutes;
    return `${hours}:${minutes} ${ampm}`;
  };

  const sleepTimes = Array(6)
    .fill(0)
    .map((_, i) => {
      // let hours = 0;
      // let minutes = 0;
      // if (props.sleep.mode === "now") {
      //   // hours = 8 + i;
      //   // minutes = extraSleep;
      // } else if (props.sleep.mode === "wake") {
      //   // hours = 8 + i - parseInt(props.sleep.time.split);
      //   // minutes = extraSleep - parseInt(props.sleep.time);
      // } else if (props.sleep.mode === "sleep") {
      //   // hours = 8 + i - parseInt(props.sleep.time.split(":")[0]);
      //   // minutes = extraSleep - parseInt(props.sleep.time.split(":")[1]);
      // }
      // if (minutes < 0) {
      //   hours -= 1;
      //   minutes += 60;
      // }
      // if (hours < 0) hours += 24;
      return (
        <div className='sleep--list-item'>
          {/* {formatTime(`${hours}:${minutes}`)} */}
          <div className="sleep--item-time">
            {formatTime(props.sleep.time)}
          </div>
          <div className="sleep--item-cycles">
            {i + 1} cycles
          </div>
        </div>
      );
    });

  return (
    <div className='sleep'>
      <div className='sleep--text'>
        {(props.sleep.mode === "now" &&
          "If you are going to sleep now (" +
            formatTime(props.sleep.time) +
            "), you should wake up at...") ||
          (props.sleep.mode === "wake" &&
            "If you are waking up at " +
              formatTime(props.sleep.time) +
              ", you should go to sleep at...") ||
          (props.sleep.mode === "sleep" &&
            "If you are going to sleep at " +
              formatTime(props.sleep.time) +
              ", you should wake up at...")}
      </div>
      <div className='sleep--list'>{sleepTimes}</div>

      {/* {props.sleep.mode === "wake" && <p>{props.sleep.time}</p>}
      {props.sleep.mode === "sleep" && <p>{props.sleep.time}</p>}
      <p>{props.sleep.mode}</p>
      <p>{props.sleep.time}</p>
      <p>+{extraSleep}</p> */}
    </div>
  );
}

export default SleepPage;

import "./SleepPage.css";

function SleepPage(props: any) {
  let extraSleep = 0;
  if (props.addSleep) extraSleep = props.fallAsleep;

  const formatTime = (time: string) => {
    const [hoursString, minutesString] = time.split(":");
    const hours = parseInt(hoursString);
    const minutes = parseInt(minutesString);
    const period = hours < 12 ? "AM" : "PM";
    const hours12 = hours % 12 === 0 ? 12 : hours % 12;
    const hours12String = hours12 === 0 ? "12" : hours12.toString();
    const newTimeString = `${hours12String}:${minutesString} ${period}`;
    return newTimeString;
  };

  const addMinutes = (time: string, minutesToAdd: number) => {
    const [hoursString, minutesString] = time.split(":");
    const hours = parseInt(hoursString);
    const minutes = parseInt(minutesString);
    let totalMinutes = hours * 60 + minutes + minutesToAdd;
    const newTotalMinutes = ((totalMinutes % 1440) + 1440) % 1440;
    const newHours = Math.floor(newTotalMinutes / 60);
    const newMinutes = newTotalMinutes % 60;
    const newTimeString = `${newHours.toString().padStart(2, "0")}:${newMinutes
      .toString()
      .padStart(2, "0")}`;
    return newTimeString;
  };

  const sleepTimes = () => {
    let content = [];
    for (let i = 6; i > 0; i--) {
      let addTime = 0;
      let tempExtraSleep = 0;
      if (!Number.isNaN(extraSleep)) tempExtraSleep = extraSleep;
      if (props.sleep.mode === "wake") addTime = -90 * i - tempExtraSleep;
      else addTime = 90 * i + tempExtraSleep;
      content.push(
        <div className='sleep--list-item' key={"cycle-" + i}>
          <div className={"sleep--cycle-" + i}>
            {formatTime(addMinutes(props.sleep.time, addTime))}
          </div>
          <div className='sleep--cycle-count'>
            {i} {i === 1 ? "Cycle" : "Cycles"}
          </div>
        </div>
      );
    }
    return content;
  };

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
      <div className='sleep--list'>{sleepTimes()}</div>
    </div>
  );
}

export default SleepPage;

function SleepPage(props: any) {
  let extraSleep = 0;
  if (props.addSleep) extraSleep = props.fallAsleep;

  return <div className='sleep'>
    Sleep page
    <p>{props.sleep.mode}</p>
    <p>{props.sleep.time}</p>
    <p>+{extraSleep}</p>
  </div>;
}

export default SleepPage;

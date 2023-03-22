import "./FormPage.css";

function FormPage() {
  return (
    <div className='form'>
      <div className='form--option-container'>
        <h2>Sleep now...</h2>
        <span>Press this button if you are going to sleep now</span>
        <button className='form--sleep-now-btn'>Sleep now</button>
      </div>
      <div className='form--option-container'>
        <h2>Wake up at...</h2>
        <span>Enter the time you want to wake up at</span>
        <div className='form--input-container'>
          <input type='time' name='wake-at-input' id='wake-at-input' aria-label="Time to wake up at" />
          <button>Go</button>
        </div>
      </div>
      <div className='form--option-container'>
        <h2>Sleep at...</h2>
        <span>Enter the time you will go to sleep</span>
        <div className='form--input-container'>
          <input type='time' name='sleep-at-input' id='sleep-at-input' aria-label="Time to go to sleep" />
          <button>Go</button>
        </div>
      </div>
    </div>
  );
}

export default FormPage;

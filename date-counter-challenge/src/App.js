import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [days, setDays] = useState(0);
  const [daysDesc, setDaysDesc] = useState("");

  function handleNextStep() {
    setStep((s) => s + 1);
  }

  function handlePrevStep() {
    setStep((s) => s - 1);
  }

  function handleNextDay() {
    setDays((d) => d + step);
    handleDaysDescChanging(days + step);
  }

  function handlePrevDay() {
    setDays((d) => d - step);
    handleDaysDescChanging(days - step);
    // console.log(daysDesc);
  }

  function handleDaysDescChanging(newDays) {
    let currDate = new Date();
    let newDate = new Date(currDate.setDate(currDate.getDate() + newDays));
    console.log(newDays);
    if (newDays > 0) {
      var desc = `${newDays} from today is ${newDate.toUTCString()}`;
      setDaysDesc((d) => desc);
    } else if (newDays < 0) {
      var desc = `${newDays * -1} days ago was ${newDate.toUTCString()}`;
      setDaysDesc((d) => desc);
    } else {
      var desc = `Today is ${newDate.toUTCString()}`;
      setDaysDesc((d) => desc);
    }
  }

  return (
    <>
      <div>
        <div>
          <button onClick={() => handleNextStep()}>+</button>
          <h1>Step: {step}</h1>
          <button onClick={() => handlePrevStep()}>-</button>
        </div>
        <div>
          <button onClick={() => handleNextDay()}>+</button>
          <h1>Counter: {days}</h1>
          <button onClick={() => handlePrevDay()}>-</button>
        </div>
      </div>
      <div>
        <h1>{daysDesc}</h1>
      </div>
    </>
  );
}

export default App;

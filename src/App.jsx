import { useState } from "react";
import "./App.css";
import { Feedback } from "./components/Feedback/Feedback";
import { Options } from "./components/Options/Options";
import { Notification } from "./components/Notification/Notification";

export function App() {
  const state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [value, setValue] = useState(state);

  const updateFeedback = (feedbackType) => {
    setValue({
      ...value,
      [feedbackType]: value[feedbackType] + 1,
    });
  };

  // console.log(value);

  const totalFeedback = value.good + value.neutral + value.bad;
  // console.log(totalFeedback);

  return (
    <>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Options onUpdate={() => updateFeedback("good")}>Good</Options>
      <Options onUpdate={() => updateFeedback("neutral")}>Neutral</Options>
      <Options onUpdate={() => updateFeedback("bad")}>Bad</Options>
      <div>
        {totalFeedback > 0 ? (
          <Feedback value={value} totalFeedback={totalFeedback} />
        ) : (
          <Notification />
        )}
      </div>
    </>
  );
}

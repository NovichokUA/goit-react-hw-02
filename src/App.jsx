import { useState } from "react";
import { Feedback } from "./components/Feedback/Feedback";
import { Options } from "./components/Options/Options";
import { Notification } from "./components/Notification/Notification";

import "./App.css";

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

  const resetFeedback = () => {
    setValue({ state });
  };

  const totalFeedback = value.good + value.neutral + value.bad;

  const positivFeedback =
    Math.round(((value.good + value.neutral) / totalFeedback) * 100) || 0;
  // console.log(positivFeedback);

  return (
    <>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Options
        onUpdate={updateFeedback}
        totalFeedback={totalFeedback}
        reset={resetFeedback}
      />

      <div>
        {totalFeedback > 0 ? (
          <Feedback
            value={value}
            totalFeedback={totalFeedback}
            persentPositiv={positivFeedback}
          />
        ) : (
          <Notification />
        )}
      </div>
    </>
  );
}

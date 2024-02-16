import { useState, useEffect } from "react";
import { Feedback } from "./components/Feedback/Feedback";
import { Options } from "./components/Options/Options";
import { Notification } from "./components/Notification/Notification";

import "./App.css";

const state = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const getSavedValue = () => {
  const savedValue = window.localStorage.getItem("my-key");
  return savedValue !== null ? JSON.parse(savedValue) : state;
};

export function App() {
  const [value, setValue] = useState(getSavedValue);

  const updateFeedback = (feedbackType) => {
    setValue({
      ...value,
      [feedbackType]: value[feedbackType] + 1,
    });
  };

  useEffect(() => {
    window.localStorage.setItem("my-key", JSON.stringify(value));
  }, [value]);

  const resetFeedback = () => {
    setValue({ ...state });
  };

  const totalFeedback = value.good + value.neutral + value.bad;

  const positivFeedback =
    Math.round(((value.good + value.neutral) / totalFeedback) * 100) || 0;

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

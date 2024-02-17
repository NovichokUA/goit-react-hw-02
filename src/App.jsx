import { useState, useEffect } from "react";
import { Feedback } from "./components/Feedback/Feedback";
import { Options } from "./components/Options/Options";
import { Notification } from "./components/Notification/Notification";
import { Description } from "./components/Description/Description.jsx";

export function App() {
  const state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [value, setValue] = useState(() => {
    const savedValue = window.localStorage.getItem("my-key");
    return savedValue !== null ? JSON.parse(savedValue) : state;
  });

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
      <Description />
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
            percentPositive={positivFeedback}
          />
        ) : (
          <Notification />
        )}
      </div>
    </>
  );
}

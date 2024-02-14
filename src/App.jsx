import { useState } from "react";
import "./App.css";
import { Feedback } from "./components/Feedback/Feedback";
import { Options } from "./components/Options/Options";

export function App() {
  const [value, setValue] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  // feedbackType;
  const updateFeedback = (type) => {
    setValue({
      ...value,
      [type]: value[type] + 1,
    });
  };

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
      <Feedback value={value} />
    </>
  );
}

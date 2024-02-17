import css from "./Feedback.module.css";
import propTypes from "prop-types";

export const Feedback = ({
  value: { good, neutral, bad },
  percentPositive,
  totalFeedback,
}) => {
  return (
    <div className={css.container}>
      <p className={css.title}>Good : {good}</p>
      <p className={css.title}>Neutral : {neutral}</p>
      <p className={css.title}>Bad : {bad}</p>
      <p className={css.title}>Total : {totalFeedback}</p>
      <p className={css.title}>Positiv : {percentPositive}</p>
    </div>
  );
};

Feedback.propTypes = {
  value: propTypes.object.isRequired,
  percentPositive: propTypes.number.isRequired,
  totalFeedback: propTypes.number.isRequired,
};

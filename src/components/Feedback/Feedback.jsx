import css from "./Feedback.module.css";

export const Feedback = ({
  value: { good, neutral, bad },
  persentPositiv,
  totalFeedback,
}) => {
  return (
    <div className={css.container}>
      <p className={css.title}>Good : {good}</p>
      <p className={css.title}>Neutral : {neutral}</p>
      <p className={css.title}>Bad : {bad}</p>
      <p className={css.title}>Total : {totalFeedback}</p>
      <p className={css.title}>Positiv : {persentPositiv}</p>
    </div>
  );
};

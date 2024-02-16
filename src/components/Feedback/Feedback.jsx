export const Feedback = ({
  value: { good, neutral, bad },
  persentPositiv,
  totalFeedback,
}) => {
  return (
    <div>
      <p>Good : {good}</p>
      <p>Neutral : {neutral}</p>
      <p>Bad : {bad}</p>
      <p>Total : {totalFeedback}</p>
      <p>Positiv : {persentPositiv}</p>
    </div>
  );
};

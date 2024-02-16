import css from "./Options.module.css";

export const Options = ({ onUpdate, totalFeedback, reset }) => {
  return (
    <div className={css.container}>
      <button className={css.btn} onClick={() => onUpdate("good")}>
        Good
      </button>
      <button className={css.btn} onClick={() => onUpdate("neutral")}>
        Neutral
      </button>
      <button className={css.btn} onClick={() => onUpdate("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={css.btn} onClick={reset}>
          Reset
        </button>
      )}
    </div>
  );
};

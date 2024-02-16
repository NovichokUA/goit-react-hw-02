import css from "./Title.module.css";

export const Title = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Sip Happens Café</h1>
      <p className={css.titleDescription}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};

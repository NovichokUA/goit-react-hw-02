import css from "./Notification.module.css";

export const Notification = () => {
  return (
    <div className={css.container}>
      <p className={css.title}>No feedback yet</p>
    </div>
  );
};

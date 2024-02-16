import css from "./Options.module.css";
import {
  FaHeart,
  FaRegFaceMeh,
  FaHeartCrack,
  FaRegTrashCan,
} from "react-icons/fa6";

export const Options = ({ onUpdate, totalFeedback, reset }) => {
  return (
    <div className={css.container}>
      <button className={css.btn} onClick={() => onUpdate("good")}>
        <FaHeart className={css.myIconGood} size="15" />
        Good
      </button>
      <button className={css.btn} onClick={() => onUpdate("neutral")}>
        <FaRegFaceMeh className={css.myIconGood} size="15" />
        Neutral
      </button>
      <button className={css.btn} onClick={() => onUpdate("bad")}>
        <FaHeartCrack className={css.myIconGood} size="14" />
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={css.btn} onClick={reset}>
          <FaRegTrashCan size="14" />
          Reset
        </button>
      )}
    </div>
  );
};

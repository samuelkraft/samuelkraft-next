import { IconStar } from "components/Icons";
import { useState } from "react";
import styles from "./rating.module.css";

type RatingProps = {
  value: number;
  max?: number;
};

const Rating = ({ value, max = 5 }: RatingProps) => {
  /* Calculate how much of the stars should be "filled" */
  const percentage = Math.round((value / max) * 100);

  return (
    <div className={styles.container}>
      {/* Create an array based on the max rating, render a star for each */}
      {Array.from(Array(max).keys()).map((_, i) => (
        <IconStar key={String(i)} className={styles.star} />
      ))}
      {/* Render a div overlayed on top of the stars that are not filled */}
      <div
        className={styles.overlay}
        style={{ width: `${100 - percentage}%` }}
      />
    </div>
  );
};

export const RatingPlayground = () => {
  const [value, setValue] = useState(4.6);
  const [max, setMax] = useState(5);

  return (
    <div className={styles.playground}>
      <Rating value={value} max={max} />
      <div className={styles.controls}>
        <label>
          Value
          <input
            type="number"
            value={value}
            step={0.1}
            min={0.1}
            max={max}
            onChange={(e) => setValue(+e.target.value)}
          />
        </label>
        <label>
          Max
          <input
            type="number"
            value={max}
            onChange={(e) => setMax(+e.target.value)}
            min={1}
            max={10}
          />
        </label>
      </div>
      <p className={styles.pointer}>
        Test the component by changing the values above 👆
      </p>
    </div>
  );
};

export default Rating;

import { useState } from "react";
import styles from "./Rating.module.css";

const Star = ({ color = "currentColor", size = 24, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
};

Star.displayName = "Star";

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
        <Star key={String(i)} className={styles.star} />
      ))}
      {/* Render a div overlayed on top of the stars that are not filled */}
      <div
        className={styles.overlay}
        style={{ width: `${100 - percentage}%` }}
      />
    </div>
  );
};

const RatingPlayground = () => {
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

export default RatingPlayground;

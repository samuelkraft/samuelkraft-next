import cn from "clsx";
import styles from "./messages.module.scss";

export const TailBreakdown = () => (
  <ol className={styles.list}>
    <li className={cn(styles.shared, styles.tailBreakdown)}>Hello</li>
  </ol>
);

const messages = [
  { text: "Hey there! What's up", sent: true },
  { text: "Checking out iOS7 you know.." },
  { text: "Check out this bubble!", sent: true },
  { text: "It's pretty cool!" },
  { text: "And it's in css?" },
  { text: "Yeah it's pure CSS & HTML", sent: true },
  {
    text: "(ok.. almost, I added a tiny bit of JS to remove sibling message tails)",
    sent: true,
  },
  {
    text: "Wow that's impressive. But what's even more impressive is that this bubble is really high.",
  },
];

const Messages = (): JSX.Element => (
  <ol className={cn(styles.list, "not-prose")}>
    {messages.map(({ text, sent }, i) => {
      const isLast = i === messages.length - 1;
      const noTail = !isLast && messages[i + 1]?.sent === sent;
      return (
        <li
          key={text}
          className={cn(
            styles.shared,
            sent ? styles.sent : styles.received,
            noTail && styles.noTail
          )}
        >
          {text}
        </li>
      );
    })}
  </ol>
);

export default Messages;

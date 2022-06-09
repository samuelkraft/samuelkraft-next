import { useState, useEffect, useRef } from "react";
import cn from "classnames";
import { motion, AnimatePresence } from "framer-motion";
import randomWords from "random-words";
import styles from "./Messages.module.css";

function useInterval(callback: any, delay: any) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
    return null;
  }, [delay]);
}

const messageConfig = { min: 3, max: 10, join: " " };
const initialMessages = [
  { text: randomWords(messageConfig), sent: true },
  { text: randomWords(messageConfig) },
  { text: randomWords(messageConfig), sent: true },
  { text: randomWords(messageConfig) },
  { text: randomWords(messageConfig) },
  { text: randomWords(messageConfig), sent: true },
];

const transition = {
  type: "spring",
  stiffness: 200,
  mass: 0.2,
  damping: 20,
};

const variants = {
  initial: {
    opacity: 0,
    y: 300,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition,
  },
};

const Messages = (): JSX.Element => {
  const [messages, setMessages] = useState(initialMessages);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useInterval(() => {
    setMessages((curr) => {
      const first = curr.shift(); // eslint-disable-line
      return [
        ...curr,
        { text: randomWords(messageConfig), sent: Math.random() > 0.5 },
      ];
    });
  }, 2000);

  // Don't render on the server
  if (!isHydrated) {
    return <></>;
  }

  return (
    <AnimatePresence>
      <ol className={styles.list} style={{ minHeight: 600 }}>
        {messages.map(({ text, sent }, i) => {
          const isLast = i === messages.length - 1;
          const noTail = !isLast && messages[i + 1]?.sent === sent;
          return (
            <motion.li
              key={text}
              className={cn(
                styles.shared,
                sent ? styles.sent : styles.received,
                noTail && styles.noTail
              )}
              initial="initial"
              animate="enter"
              variants={variants}
              layout
            >
              {text}
            </motion.li>
          );
        })}
      </ol>
    </AnimatePresence>
  );
};

export default Messages;

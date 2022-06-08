import { useRef, useState } from "react";
import { useRouter, NextRouter } from "next/router";

import { Box, Button, Text } from "design-system";
import { IconBlog as Send, IconUser as CheckCircle } from "components/Icons";

type SubscribeProps = { title?: string; header?: boolean; className?: string };

const Subscribe = ({ title, header = true, className }: SubscribeProps) => {
  const { query } = useRouter() as NextRouter;
  const inputEl = useRef(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const subscribe = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      setLoading(false);
      setMessage(error);
      return;
    }

    inputEl.current.value = "";
    setLoading(false);
    setMessage("Thanks! Check you inbox for a confirmation email ✨");
  };

  if (query.confirmed) {
    return (
      <div>
        <header className={styles.header}>
          <CheckCircle />
          <h4 className={styles.title}>Thanks for confirming your email!</h4>
        </header>
        <p className={styles.description} style={{ marginBottom: 0 }}>
          You&apos;re on the list and will get updates when new content is
          published.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={subscribe}>
      {header && (
        <>
          <header>
            <Send />
            <Text>
              {title || "Enjoyed this post? Subscribe to the newsletter!"}
            </Text>
          </header>
          <Text>
            A newsletter in the realm between <em>design &amp; development</em>.
            Learn animations, CSS, web development tips &amp; tricks and
            creating delightful and useful interfaces!
          </Text>
          <Text>No spam, unsubcribe at any time!</Text>
        </>
      )}
      <label htmlFor="email-input" className="sr-only">
        Email address
      </label>
      <Box>
        <input
          id="email-input"
          name="email"
          placeholder="Email address"
          ref={inputEl}
          required
          type="email"
        />
        <Button disabled={loading} type="submit">
          Subscribe
        </Button>
        {message && <Text>{message}</Text>}
      </Box>
    </form>
  );
};

export default Subscribe;

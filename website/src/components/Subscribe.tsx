import { useRef, useState } from "react";
import { useRouter, NextRouter } from "next/router";

import { Box, Button, Input, Stack, Text } from "design-system";
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
      <Box backgroundColor="card" padding={6} borderRadius="huge">
        <Stack as="header">
          <CheckCircle />
          <Text as="h3">Thanks for confirming your email!</Text>
        </Stack>
        <Text color="textSecondary">
          You&apos;re on the list and will get updates when new content is
          published.
        </Text>
      </Box>
    );
  }

  return (
    <Box backgroundColor="card" padding={6} borderRadius="huge">
      <form onSubmit={subscribe}>
        <Stack direction="column" space={3}>
          {header && (
            <>
              <Stack as="header" align="center" space={3}>
                <Send />
                <Text as="h3">
                  {title || "Enjoyed this post? Subscribe to the newsletter!"}
                </Text>
              </Stack>
              <Box>
                <Text color="textSecondary">
                  A newsletter in the realm between{" "}
                  <em>design &amp; development</em>. Learn animations, CSS, web
                  development tips &amp; tricks and creating delightful and
                  useful interfaces!
                </Text>
                <Text color="textSecondary">
                  No spam, unsubcribe at any time!
                </Text>
              </Box>
            </>
          )}
          <Stack space={4}>
            <Input
              id="email-input"
              name="email"
              placeholder="Email address"
              ref={inputEl}
              required
              type="email"
              width="full"
            />
            <Button disabled={loading} type="submit">
              Subscribe
            </Button>
          </Stack>
          {message && <Text>{message}</Text>}
        </Stack>
      </form>
    </Box>
  );
};

export default Subscribe;

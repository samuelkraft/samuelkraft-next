import { Stack, Text } from "design-system";
import { useEffect, useState } from "react";
import { IconEye } from "./Icons";

const HitCounter = ({ slug }: { slug: string }): JSX.Element => {
  const [hits, setHits] = useState(undefined);

  useEffect(() => {
    // Don't count hits on localhost
    if (process.env.NODE_ENV !== "production") {
      return;
    }
    // Invoke the function by making a request.
    // Update the URL to match the format of your platform.
    fetch(`/api/register-hit?slug=${slug}`)
      .then((res) => res.json())
      .then((json) => {
        if (typeof json.hits === "number") {
          setHits(json.hits);
        }
      });
  }, [slug]);

  return (
    <Stack space={3} align="center">
      <Text color="textSecondary">
        <IconEye />
      </Text>
      <Text color="textSecondary">
        {typeof hits === "undefined" ? "--" : hits} Views
      </Text>
    </Stack>
  );
};

export default HitCounter;

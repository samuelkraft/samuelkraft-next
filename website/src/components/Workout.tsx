import { Box, Stack, Text } from "design-system";
import { motion } from "framer-motion";

const stats = [
  {
    name: "Distance",
    value: "8km",
  },
  {
    name: "Pace",
    value: "6:19/km",
  },
  {
    name: "Duration",
    value: "42m 3s",
  },
];

const MotionBox = motion(Box);

const Workout = ({}) => {
  return (
    <MotionBox
      as="a"
      href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
      target="_blank"
      rel="noreferrer noopener"
      padding={6}
      boxShadow="medium"
      borderRadius="medium"
      backgroundColor="background"
      marginX="auto"
      style={{ width: 350 }}
      initial={{ rotate: -2 }}
      whileHover={{ y: -2 }}
    >
      <Stack direction="column" space={6}>
        <Stack direction="column">
          <Text color="textSecondary" size="small">
            Last workout
          </Text>
          <Text weight="bold">Ekoparksleden med Emma</Text>
        </Stack>
        <Box
          height="large"
          backgroundColor="card"
          marginX="-6"
          paddingY={9}
          textAlign="center"
        >
          map
        </Box>
        <Stack space={6}>
          {stats.map(({ name, value }) => (
            <Stack direction="column" key={name}>
              <Text color="textSecondary" size="small">
                {name}
              </Text>
              <Text weight="bold">{value}</Text>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </MotionBox>
  );
};

export default Workout;

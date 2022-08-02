import { Box, Stack, Text } from "design-system";
import { motion } from "framer-motion";
import convertPolyline from "@mapbox/polyline";
import Map from "./Map";
import { useState } from "react";

const getSpeedForSportType = (speed: number, sportType: string) => {
  switch (sportType) {
    case "Swim":
      return {
        name: "Pace",
        // km/h to minutes per 100m
        value: `${(speed * 3.6) / 100}/100m`,
      };
    case "Run":
      const elapsedTime = 44 / 7;
      // const minutes = speed/
      return {
        name: "Pace",
        value: `${(0.06 / speed).toFixed(1)}/min`,
      };
    default:
      return {
        name: "Speed",
        value: `${(speed * 3.6).toFixed(1)} km/h`,
      };
  }
};

const MotionBox = motion(Box);

type ActivityProps = {
  activity: any;
};

const Activity = ({ activity }: ActivityProps) => {
  const {
    distance,
    map: { summary_polyline },
  } = activity;
  const geoJson = summary_polyline
    ? convertPolyline.toGeoJSON(summary_polyline)
    : null;

  const getFormattedStats = () => {
    return [
      {
        name: "Distance",
        value:
          distance < 1000
            ? `${distance}m`
            : (distance / 1000).toFixed(2) + "km",
      },
      getSpeedForSportType(activity.average_speed, activity.sport_type),
      {
        name: "Duration",
        value: new Date(activity.moving_time * 1000)
          .toISOString()
          .substring(14, 19),
      },
    ];
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <MotionBox
      // as="a"
      // href={`https://www.strava.com/activities/${activity.id}`}
      // target="_blank"
      // rel="noreferrer noopener"
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
          <Text weight="bold">
            [{activity.sport_type}] {activity.name}
          </Text>
        </Stack>
        {geoJson && (
          <Box backgroundColor="card" marginX="-6">
            <Map geoJson={geoJson} />
          </Box>
        )}
        <Stack space={6}>
          {getFormattedStats().map(({ name, value }) => (
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

export default Activity;

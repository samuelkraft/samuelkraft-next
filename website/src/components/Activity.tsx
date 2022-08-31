import { Box, MotionBox, Stack, Text } from "design-system";
import convertPolyline from "@mapbox/polyline";
import Map from "./Map";
import { IconBike, IconRun, IconSwim, IconWalk } from "./Icons";

export type ActivityType = {
  id: string;
  name: string;
  start_date: string;
  moving_time: number;
  sport_type: "Swim" | "Run" | "Bike" | "Hike";
  distance: number;
  average_speed: number;
  visibility: "everyone" | "followers" | "me";
  map: {
    summary_polyline: string;
  };
};

const getIconForSportType = (sportType: ActivityType["sport_type"]) => {
  switch (sportType) {
    case "Swim":
      return IconSwim;
    case "Run":
      return IconRun;
    case "Bike":
      return IconBike;
    default:
      return IconWalk;
  }
};

const getSpeedForSportType = (
  speed: number,
  sportType: ActivityType["sport_type"],
  custom?: string
) => {
  switch (sportType) {
    case "Swim":
      return {
        name: "Pace",
        // m/s to min/100m
        value: custom,
      };
    case "Run":
      const pace = 1 / (speed * 0.06);
      return {
        name: "Pace",
        // m/s to min/km
        value: `${Math.floor(pace)}:${Math.floor((pace % 1) * 60)}/km`,
      };
    default:
      return {
        name: "Speed",
        // m/s to km/h
        value: `${(speed * 3.6).toFixed(1)} km/h`,
      };
  }
};

const getFormattedStats = (activity: ActivityType) => {
  // Calculate swim pace
  // TODO: Move inside getSpeedForSportType calculating from activity.average_speed
  const paceInSeconds = (activity.moving_time / activity.distance) * 100;
  const minutes = Math.floor(paceInSeconds / 60);
  const seconds = String(Math.round(paceInSeconds - minutes * 60)).padStart(
    2,
    "0"
  );
  const swimPace = `${minutes}:${seconds}/100m`;

  const { distance } = activity;
  return [
    {
      name: "Distance",
      value:
        distance < 1000 ? `${distance}m` : (distance / 1000).toFixed(2) + "km",
    },
    getSpeedForSportType(activity.average_speed, activity.sport_type, swimPace),
    {
      name: "Duration",
      value: new Date(activity.moving_time * 1000)
        .toISOString()
        .substring(14, 19),
    },
  ];
};

type ActivityProps = {
  activity: ActivityType;
};

const Activity = ({ activity }: ActivityProps) => {
  const {
    map: { summary_polyline },
  } = activity;
  const geoJson = summary_polyline
    ? convertPolyline.toGeoJSON(summary_polyline)
    : null;

  const Icon = getIconForSportType(activity.sport_type);
  const stats = getFormattedStats(activity);
  return (
    <MotionBox
      as="a"
      href={`https://www.strava.com/activities/${activity.id}`}
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
      cursor="pointer"
    >
      <Stack direction="column" space={6}>
        <Stack direction="column">
          <Text color="textSecondary" size="small">
            Last workout
          </Text>
          <Text weight="bold">
            <Box
              as="span"
              display="inline-flex"
              marginRight={2}
              position="relative"
              top={2}
            >
              <Icon />
            </Box>
            {activity.name}
          </Text>
        </Stack>
        {geoJson && (
          <Box backgroundColor="card" marginX="-6">
            <Map geoJson={geoJson} />
          </Box>
        )}
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

export default Activity;

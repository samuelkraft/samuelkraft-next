var polyline = require("@mapbox/polyline");

export type ActivityType = {
  id: number;
  name: string;
  start_date: string;
  moving_time: number;
  sport_type: "Swim" | "Run" | "Bike" | "Hike" | "TrailRun" | "VirtualRide";
  distance: number;
  average_speed: number;
  visibility: "everyone" | "followers" | "me";
  map: {
    summary_polyline: string;
  };
  total_photo_count: number;
  photos: {
    primary: {
      urls: Array<any>;
    };
  };
};

const getSpeedForSportType = (
  speed: number,
  sportType: ActivityType["sport_type"],
  custom?: string
) => {
  switch (sportType) {
    case "Swim":
      return {
        name: "Per 100m",
        // m/s to min/100m
        value: custom,
      };
    case "Run":
    case "TrailRun":
      const pace = 1 / (speed * 0.06);
      return {
        name: "Per km",
        // m/s to min/km
        value: `${Math.floor(pace)}’${Math.floor((pace % 1) * 60)}”`,
      };
    default:
      return {
        name: "Km/h",
        // m/s to km/h
        value: `${(speed * 3.6).toFixed(1)}`,
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
        distance < 1000
          ? `${distance} m`
          : `${(distance / 1000).toFixed(2)} km`,
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

export default function Activity({ activity }: { activity: ActivityType }) {
  const stats = getFormattedStats(activity);
  const geoJson = polyline.toGeoJSON(activity.map.summary_polyline);

  var padding = 20;
  var width = 800;
  var height = 600;

  return (
    <div className="absolute inset-0 flex flex-col justify-between">
      <header></header>

      <div className="absolute bottom-0 right-0 w-full h-full radial-fade" />
      <footer className="flex flex-col justify-center items-end gap-1 px-3 pb-3.5 z-10">
        {stats.map((stat) => (
          <div
            className="flex flex-col gap-0 text-right text-white"
            key={stat.name}
          >
            <p className="text-lg">{stat.value}</p>
            <p className="text-[11px] leading-none font-mono font-semibold opacity-70">
              {stat.name}
            </p>
          </div>
        ))}
      </footer>
    </div>
  );
}

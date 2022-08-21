import Map, { Source, Layer } from "react-map-gl";
import turfCenter from "@turf/center";
import "mapbox-gl/dist/mapbox-gl.css";
import { Box } from "design-system";

const layerStyle = {
  id: "route",
  type: "line",
  layout: {
    "line-join": "round",
    "line-cap": "round",
  },
  paint: {
    "line-color": "red",
    "line-width": 4,
  },
} as any;

type MapComponentProps = {
  geoJson: any;
};

const MapComponent = ({ geoJson }: MapComponentProps) => {
  if (!geoJson) {
    return null;
  }
  const bbox = turfCenter(geoJson);
  return (
    <Box aspectRatio="3/2" position="relative">
      <Map
        initialViewState={{
          latitude: bbox.geometry.coordinates[1],
          longitude: bbox.geometry.coordinates[0],
          zoom: 10,
        }}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          inset: 0,
          cursor: "default",
        }}
        mapStyle="mapbox://styles/mapbox/outdoors-v11"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        scrollZoom={false}
        doubleClickZoom={false}
      >
        <Source id="route" type="geojson" data={geoJson}>
          <Layer {...layerStyle} />
        </Source>
      </Map>
    </Box>
  );
};

export default MapComponent;

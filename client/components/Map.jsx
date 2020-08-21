import MapGL, {
  Popup,
  NaviagtionControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";
import { useState } from "react";

const AreaMap = () => {
  const [viewport, setViewport] = useState({
    latitude: 31.93505,
    longitude: -109.9596,
    zoom: 10,
    bearing: 0,
    pitch: 0,
  });
  return (
    <MapGL
      {...viewport}
      width="100vw"
      height="100vh"
      mapStyle="mapbox://styles/mapbox/satellite-v9"
      onViewportChange={(viewport, nextViewport) =>
        setViewport({ ...viewport, nextViewport })
      }
      mapboxApiAccessToken="pk.eyJ1IjoibXV0dW1ibyIsImEiOiJja2UzZXp1OHIwNjBpMnFwZXloMHdqaDE1In0.s4z3QCSq5k3gfvRBBylOAA"
    ></MapGL>
  );
};
export default AreaMap;

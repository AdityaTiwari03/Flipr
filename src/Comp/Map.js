import GoogleMapReact from "google-map-react";
import {
  Paper,
  Typography,
  dividerClasses,
  useMediaQuery,
} from "@mui/material";

const Map = () => {
  const isMobile = useMediaQuery("(min-width: 600px)");
  const coordinates = { lat: 0, lng: 0 };
  return (
    <div>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyD_r7iZOAGiSXfaktaNH1NyPhS9bj-kXiw" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={""}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;

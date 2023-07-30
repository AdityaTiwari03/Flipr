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
    <div class="mapouter">
      <div class="gmap_canvas">
        s
        <iframe
          class="gmap_iframe"
          width="100%"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Phooti Ko&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
        <a href="https://connectionsgame.org/">Connections NYT</a>
      </div>
    </div>
  );
};

export default Map;

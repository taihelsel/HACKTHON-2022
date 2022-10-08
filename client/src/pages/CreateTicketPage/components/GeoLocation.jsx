import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import FormInput from "../../../Components/FormInput";

export default function GeoLocation({ setLocation, location }) {
  const [browserLocation, setBrowserLocation] = useState(null);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setBrowserLocation(true);
        setLocation({
          coords: {
            long: pos.coords.longitude,
            lat: pos.coords.latitude,
          },
          type: "geo",
        });
      }, (error) => {
        if (error.code === error.PERMISSION_DENIED) { setBrowserLocation(false); }
      });
    } else {
      setBrowserLocation(false);
    }
  }, []);
  if (browserLocation === null) {
    return (
      <div>
        Fetching Device Location...
      </div>
    );
  }
  if (browserLocation === false) {
    return (
      <div>
        Unable to get device location.
        <br />
        Please enter your current location
        <FormInput
          type="text"
          required
          value={location.inputValue}
          updateState={(e) => setLocation({ type: "input", inputValue: e.target.value })}
          id="locationInput"
          labelText="Location"
        />
      </div>
    );
  }
  return (
    <div>
      current location :
      {JSON.stringify(location)}
    </div>
  );
}
GeoLocation.propTypes = {
  setLocation: PropTypes.func.isRequired,
  location: PropTypes.shape({
    type: PropTypes.string.isRequired,
    inputValue: PropTypes.string,
    coords: PropTypes.shape({
      longitude: PropTypes.string,
      latitude: PropTypes.string,
    }),
  }).isRequired,
};

import React from "react";
import "./GoogleMaps.scss";

class GoogleMaps extends React.Component {
  render() {
    return (
      <div className="map-container col-md mt-4">
        <h5>Find our office located here:</h5>
        <iframe
          title="map"
          className="map"
          frameBorder="0"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAr-KRteibvjXnVpKjgvRaQHkNqjdxWwFQ
          &q=7+Riverside_Quay,Southbank,Victoria,Australia`}
        ></iframe>
      </div>
    );
  }
}

export default GoogleMaps;

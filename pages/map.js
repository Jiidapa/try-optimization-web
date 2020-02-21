import React from "react";
import GoogleMap from "google-map-react";

const AnyReactComponent = () => (
  <div className="layout-marker">
    <div>
      <img src="/static/ic_google_maps_pin.svg" />
    </div>
    <div className="font-marker">The Exinsting Company</div>
    <style jsx>
      {`
        .layout-marker {
          display: flex;
          flex-direction: row;
        }
        .font-marker {
          font-family: Muli;
          font-weight: 600;
          color: red;
          margin-left: 0.5rem;
        }
      `}
    </style>
  </div>
);

export default function Map() {
  return (
    <div className="layout">
      <div className="company">The Existing Company</div>
      <div style={{ height: "400px", width: "100%" }}>
        <GoogleMap
          bootstrapURLKeys={{ key: process.env.REACT_GOOGLE_MAP }}
          defaultCenter={{
            lat: 13.7455588,
            lng: 100.5470109
          }}
          defaultZoom={15}
        >
          <AnyReactComponent lat={13.7455649} lng={100.5601058} />
        </GoogleMap>
      </div>
      <style jsx>
        {`
          .layout {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            font-family: "Muli";
          }
          .company {
            font-size: 2rem;
            margin: 3rem auto;
            font-weight: 600;
          }
        `}
      </style>
    </div>
  );
}

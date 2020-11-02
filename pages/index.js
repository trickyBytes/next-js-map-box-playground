import React, { Component } from "react";

import Head from "next/head";
import styles from "../styles/Home.module.css";
import ReactMapGL, {
  FullscreenControl,
  Marker,
  Source,
  Layer,
} from "react-map-gl";
import { fromJS } from "immutable";

const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [-0.1119, 51.5104] },
    },
  ],
};

const Map = () => {
  const container = React.useRef(null);
  const [viewport] = React.useState({
    width: 1520,
    height: 720,
    latitude: 51.4534,
    longitude: -2.5856,
    // mapStyle: "mapbox://styles/mapbox/streets-v12",
    zoom: 13,
    scrollZoom: true,
  });

  return (
    <div>
      <Head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoiYW50b25pdmFub3Zvdm8iLCJhIjoiY2tmcDJrN2RuMHd4OTJyczU3NHR4a2ZzdiJ9.KC8a5yBJXo8O6SND-CmFsA"
      >
        <Source
          id="my-data"
          type="vector"
          minzoom={6}
          maxzoom={14}
          tiles={["https://d25uarhxywzl1j.cloudfront.net/v0.1/{z}/{x}/{y}.mvt"]}
        >
          <Layer
            id="point"
            type="line"
            source="my-data"
            source-layer="mapillary-sequences"
            layout={{
              "line-cap": "round",
              "line-join": "round",
            }}
          />
        </Source>
      </ReactMapGL>
    </div>
  );
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Map />
    </div>
  );
}

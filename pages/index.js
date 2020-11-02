import React, { Component } from "react";

import Head from "next/head";
import styles from "../styles/Home.module.css";
import ReactMapGL, {
  FullscreenControl,
  Marker,
  Source,
  Layer
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
    latitude: 51.509865,
    longitude: -0.118092,
    mapStyle: "mapbox://styles/mapbox/streets-v11",
    zoom: 14,
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
        <Source id="my-data" type="raster" tileSize={256} tiles={[
          'http://tile.stamen.com/toner/{z}/{x}/{y}.png'
        ]}>
          <Layer
            id="point"
            type="raster"
            source="my-data"
            minzoom={0}
            maxzoom={22}
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

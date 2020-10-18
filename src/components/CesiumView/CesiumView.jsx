import React, { useRef, useEffect } from 'react';
import './CesiumView.scss';
import * as Cesium from 'cesium';
import "cesium/Build/Cesium/Widgets/widgets.css";


function CesiumView() {
  const cesiumContainer = useRef();

  // Your access token can be found at: https://cesium.com/ion/tokens.
  Cesium.Ion.defaultAccessToken = process.env.REACT_APP_CESIUM_TOKEN;

  useEffect(() => {
    // Initialize the Cesium Viewer in the HTML element with the "cesiumContainer" ID.
    const viewer = new Cesium.Viewer(cesiumContainer.current, {
      terrainProvider: Cesium.createWorldTerrain()
    });

    // Add Cesium OSM Buildings, a global 3D buildings layer.
    const buildingTileset = viewer.scene.primitives.add(Cesium.createOsmBuildings());   
    // Fly the camera to San Francisco at the given longitude, latitude, and height.
    viewer.camera.flyTo({
      destination : Cesium.Cartesian3.fromDegrees(-122.4175, 37.655, 400),
      orientation : {
        heading : Cesium.Math.toRadians(0.0),
        pitch : Cesium.Math.toRadians(-15.0),
      }
    });
  });
  return <div className="cesium_field" ref={cesiumContainer}></div>;
}

export default CesiumView;

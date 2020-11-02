import React, { useRef, useEffect } from 'react';
import './CesiumView.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import * as Cesium from 'cesium';
import { Link } from "react-router-dom";
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
  return <div className="cesium_field" >
    <div ref={cesiumContainer}>
      <div className="logout_link cesium-display-icon">
        <Link to="/logout"><FontAwesomeIcon icon={faSignOutAlt} /></Link>
      </div>
    </div>
  </div>;
}

export default CesiumView;

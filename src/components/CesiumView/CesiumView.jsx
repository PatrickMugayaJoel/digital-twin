import React, { useRef, useEffect } from 'react';
import './CesiumView.scss';
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import * as Cesium from 'cesium';
import { Link } from "react-router-dom";
import "cesium/Build/Cesium/Widgets/widgets.css";


function CesiumView(props) {
  const cesiumContainer = useRef();
  console.log(props.target)

  // Your access token can be found at: https://cesium.com/ion/tokens.
  Cesium.Ion.defaultAccessToken = process.env.REACT_APP_CESIUM_TOKEN;

  useEffect(() => {
    cesiumContainer.current.children[1] && cesiumContainer.current.children[1].remove();
    
    // Initialize the Cesium Viewer in the HTML element with the "cesiumContainer" ID.
    const viewer = new Cesium.Viewer(cesiumContainer.current, {
      terrainProvider: Cesium.createWorldTerrain()
    });

    (props.target.assetId === 0) ? (viewer.scene.primitives.add(Cesium.createOsmBuildings())) :
    (viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
      url: Cesium.IonResource.fromAssetId(props.target.assetId),
    })));
    // Fly the camera to San Francisco at the given longitude, latitude, and height.
    viewer.camera.flyTo({
      destination : Cesium.Cartesian3.fromDegrees(props.target.longitude, props.target.latitude, props.target.height),
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

const mapReduxStateToProps = state => {
  return {
    target: state.target
  }
}

export default  connect(mapReduxStateToProps)(CesiumView);

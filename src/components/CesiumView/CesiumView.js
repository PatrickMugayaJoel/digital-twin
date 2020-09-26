import React from 'react';
import './CesiumView.css';
import { Viewer, Entity } from "resium";
import { Cartesian3 } from "cesium";

function CesiumView() {
  return (
  <div className="cesium_field">
      <Viewer>
        <Entity
          description="test"
          name="tokyo"
          point={{ pixelSize: 10 }}
          position={Cartesian3.fromDegrees(139.767052, 35.681167, 100)}
        />
      </Viewer>
    </div>
  );
}

export default CesiumView;

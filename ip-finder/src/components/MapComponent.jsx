import React, { useEffect, useState } from 'react';
import { Map, Marker } from '@vis.gl/react-maplibre';
import { RiUserLocationFill } from 'react-icons/ri';
import 'maplibre-gl/dist/maplibre-gl.css';

const MapComponent = ({ lat, lon }) => {
  const [viewport, setViewport] = useState({
    latitude: lat,
    longitude: lon,
    zoom: 14,
    bearing: 0,
    pitch: 0,
  });

  useEffect(() => {
    setViewport((prev) => ({
      ...prev,
      latitude: lat,
      longitude: lon,
    }));
  }, [lat, lon]);

  return (
    <div className="map" style={{ width: '100%', height: '100%' }}>
      <Map
        initialViewState={viewport}
        onMove={(evt) => setViewport(evt.viewState)}
        mapStyle="https://demotiles.maplibre.org/style.json"
        style={{ width: '100%', height: '100%' }}
      >
        <Marker longitude={lon} latitude={lat}>
          <div className="mark">
            <RiUserLocationFill size="25px" color="blue" />
          </div>
        </Marker>
      </Map>
    </div>
  );
};

export default MapComponent;

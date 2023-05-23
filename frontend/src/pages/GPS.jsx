import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function GPS() {
  const [pos, setPos] = useState([]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setPos([position.coords.latitude, position.coords.longitude]);
      });
    } else {
      setPos([]);
    }
  }, []);

  return (
    pos.length == 2 && (
      <div>
        <div id="map" className="h-[50vh]">
          <MapContainer
            center={pos}
            zoom={15}
            scrollWheelZoom={false}
            style={{ height: "100vh", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={pos}>
              <Popup>{`${pos[0]},${pos[1]}`}</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    )
  );
}

export default GPS;

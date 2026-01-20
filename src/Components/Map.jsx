import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const locations = [
  { id: 1, lat: 28.7041, lng: 77.1025, label: "Delhi" },
  { id: 2, lat: 19.076, lng: 72.8777, label: "Mumbai" },
  { id: 3, lat: 13.0827, lng: 80.2707, label: "Chennai" },
];

const createIcon = (number) =>
  L.divIcon({
    html: `<div style="
      background:#007bff;
      color:white;
      border-radius:50%;
      width:30px;
      height:30px;
      display:flex;
      align-items:center;
      justify-content:center;
      font-size:14px;
      font-weight:bold;
    ">${number}</div>`,
    className: "",
  });

function Map() {
  return (
    <div className="mx-auto w-[90%] sm:w-[80%] md:w-[70%] h-[400px] sm:h-[500px] md:h-[600px] border-2 border-gray-400 rounded-lg overflow-hidden">
      {/* Map container */}
      <MapContainer
        center={[20.5937, 78.9629]}
        zoom={5}
        className="w-full h-full"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {locations.map((loc) => (
          <Marker
            key={loc.id}
            position={[loc.lat, loc.lng]}
            icon={createIcon(loc.id)}
          >
            <Popup>
              <b>{loc.label}</b> <br />
              Marker #{loc.id}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;

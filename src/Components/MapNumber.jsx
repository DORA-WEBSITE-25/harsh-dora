import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

export default function NumberedMap() {
  // Example locations with numbers
  const locations = [
    { id: 1, lat: 28.7041, lng: 77.1025, label: "Delhi" },
    { id: 2, lat: 19.076, lng: 72.8777, label: "Mumbai" },
    { id: 3, lat: 13.0827, lng: 80.2707, label: "Chennai" },
  ];

  // Custom numbered icons
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

  return (
    <MapContainer
      center={[20.5937, 78.9629]}
      zoom={5}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

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
  );
}

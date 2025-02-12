import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = ({ lat, lng }) => {
  return (
    <MapContainer center={[lat, lng]} zoom={13} style={{ height: "400px", width: "100%" }}>
      {/* OpenStreetMap Tile Layer (Free, No API Key Required) */}
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      
      {/* Marker for the given latitude & longitude */}
      <Marker position={[lat, lng]}>
        <Popup>Selected Location</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;

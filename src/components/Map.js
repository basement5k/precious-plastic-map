import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import WorkspaceOptions from './WorkspaceOptions';

// Fix Leaflet default icon issue in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Sample data for the markers based on the screenshot
const locations = [
  { 
    id: 1, 
    name: 'emcernadas', 
    position: [40.7, -74], 
    country: 'US',
    type: 'Host Events, HDPE, Drop Off Point, Collection',
    description: 'Hello! I'm Elisabeth, a mom, artist, and teacher residing in Brooklyn, NY.'
  },
  { 
    id: 2, 
    name: 'nomads', 
    position: [48.8, 2.3], 
    country: 'FR',
    type: 'Research & Development, Host Events',
    description: 'Nomads Surfing, Europe's leading manufacturer of eco-friendly surfboards and accessories.'
  },
  { 
    id: 3, 
    name: 'atelier-plastico', 
    position: [41.4, 2.2], 
    country: 'ES',
    type: 'HDPE, Collection, Injection, Mixed',
    description: 'We are a project that seeks to transform an environmental challenge into architectural solutions.'
  },
  { 
    id: 4, 
    name: 'preciousplasticleon', 
    position: [42.6, -5.6], 
    country: 'ES',
    type: 'Mould Making, Machining, Wire Electronics',
    description: 'We have machines V4 of PreciousPlastic and newer! We love to make recycling easier.'
  },
  { 
    id: 5, 
    name: 'andymidtf', 
    position: [40.4, -3.7], 
    country: 'ES',
    type: 'Assembling, Host Events, Mould Making, Machining, Welding',
    description: 'Designer and fabricator of Precious Plastic machines, I have the MultiMeltMachine.'
  },
  { 
    id: 6, 
    name: 'manglemihuella.verde', 
    position: [39.5, -0.4], 
    country: 'ES',
    type: 'LDPE, Shredder, HDPE, Research & Development, Extrusion',
    description: 'En Mangle Mi Huella Verde, estamos comprometidos con la conservación ambiental.'
  },
  { 
    id: 7, 
    name: 'preciousplasticeast', 
    position: [52.6, 1.3], 
    country: 'GB',
    type: 'Mixed',
    description: 'An innovative workshop in the east of England, manufacturing from ocean plastic.'
  },
  { 
    id: 8, 
    name: 'precious-plastic-bangkok', 
    position: [13.7, 100.5], 
    country: 'TH',
    type: 'Mixed',
    description: 'We are Precious Plastic Bangkok! We have two machines at the moment - the shredder.'
  },
  { 
    id: 9, 
    name: 'radhika', 
    position: [26.8, 80.9], 
    country: 'IN',
    type: 'Assembling, Shredder, Sheetpress, Drop Off Point, Extrusion',
    description: 'SparkLiv is an innovative and eco-conscious company based in Lucknow, India.'
  }
];

// Custom marker icons for different types of locations
const getMarkerIcon = (type) => {
  // Default icon
  let iconUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png';
  
  // Create different colors or icons based on type
  if (type.includes('HDPE')) {
    return new L.Icon({
      iconUrl,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
      className: 'hdpe-marker'
    });
  }
  
  return new L.Icon({
    iconUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
};

const MapComponent = () => {
  const [showWorkspaces, setShowWorkspaces] = useState(true);
  
  return (
    <div className="map-container">
      <MapContainer 
        center={[20, 0]} 
        zoom={2} 
        style={{ height: '100%', width: '100%' }}
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        <ZoomControl position="bottomright" />
        
        {locations.map((location) => (
          <Marker 
            key={location.id} 
            position={location.position}
            icon={getMarkerIcon(location.type)}
          >
            <Popup>
              <div className="marker-popup">
                <h3 className="marker-popup-header">{location.name}</h3>
                <div className="marker-popup-type">{location.type}</div>
                <p className="marker-popup-description">{location.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      
      {/* Map Controls */}
      <div className="controls">
        <button className="control-button">+</button>
        <button className="control-button">-</button>
      </div>
      
      {/* Workspace Options */}
      {showWorkspaces && <WorkspaceOptions />}
    </div>
  );
};

export default MapComponent;
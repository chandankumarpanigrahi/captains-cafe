// components/Map.js
'use client'; // Mark as Client Component
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Image from 'next/image';

// Fix marker icons
const DefaultIcon = L.icon({
    iconUrl: '/images/marker.png',
    iconRetinaUrl: '/images/marker.png',
    shadowUrl: '/images/markerShadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const Maps = () => {
    const centerPosition = [20.2961, 85.8245];
    const locations = [
        {
            name: "The Captain's Cafe",
            image: "/images/crp.jpg",
            position: [20.291403, 85.804338],
            description: "Ekamra Kanan RD, near Chillika Fresh, Rental Colony, IRC Village, Nayapalli, Bhubaneswar, Odisha 751015"
        },
        {
            name: "The Scottish Cafe",
            image: "/images/sn.jpg",
            position: [20.285684, 85.845596],
            description: "782, Maharishi College Rd, Saheed Nagar, Bhubaneswar, Odisha 751007"
        }
    ];

    return (
        <div className="map-container" style={{ height: '500px', width: '100%' }}>
            <MapContainer center={centerPosition} zoom={13} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {locations.map((location, index) => (
                    <Marker key={index} position={location.position}>
                        <Popup>
                            <Image
                                src={location.image}
                                alt={location.name}
                                width={100}
                                height={100}
                                className="rounded-md mb-2"
                            />
                            <h3 className="font-bold">{location.name}</h3>
                            <p className="text-sm">{location.description}</p>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default Maps;
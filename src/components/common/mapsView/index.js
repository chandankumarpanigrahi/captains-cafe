'use client';

import { useState, useMemo, useEffect } from 'react';
import { GiAnchor } from "react-icons/gi";
const MapsView = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [isClient, setIsClient] = useState(false);
    const [MapComponent, setMapComponent] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const [showList, setShowList] = useState(true);

    // Check mobile screen size
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Load Leaflet components only on client side
    useEffect(() => {
        setIsClient(true);

        // Dynamically import Leaflet and its CSS
        import('leaflet/dist/leaflet.css').then(() => {
            return Promise.all([
                import('react-leaflet'),
                import('leaflet')
            ]).then(([reactLeaflet, L]) => {
                // Fix for default markers
                delete L.Icon.Default.prototype._getIconUrl;
                L.Icon.Default.mergeOptions({
                    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
                    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
                    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
                });

                const { MapContainer, TileLayer, Marker, Popup, useMap } = reactLeaflet;

                // Create MapUpdater component
                const MapUpdater = ({ selectedLocation }) => {
                    const map = useMap();

                    useEffect(() => {
                        if (selectedLocation && map) {
                            map.setView(selectedLocation.position, 15, {
                                animate: true,
                                duration: 1
                            });
                        }
                    }, [selectedLocation, map]);

                    return null;
                };

                // Create custom icons
                const createCustomIcon = (color = 'blue') => {
                    return new L.Icon({
                        iconUrl: `data:image/svg+xml;base64,${btoa(`
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="${color}" width="32" height="32">
                <path d="M16 2C10.48 2 6 6.48 6 12c0 8 10 20 10 20s10-12 10-20c0-5.52-4.48-10-10-10zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
              </svg>
            `)}`,
                        iconSize: [32, 32],
                        iconAnchor: [16, 32],
                        popupAnchor: [0, -32]
                    });
                };

                // Create the actual map component
                const ClientMap = ({ locations, selectedLocation, onLocationClick }) => (
                    <MapContainer
                        center={[20.23025820254803, 85.76032592961123]} // Bhubaneswar center
                        zoom={12}
                        style={{ height: '100%', width: '100%' }}
                        className="z-0"
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        <MapUpdater selectedLocation={selectedLocation} />

                        {locations.map((location) => {
                            const isSelected = selectedLocation?.id === location.id;
                            const icon = createCustomIcon(isSelected ? '#dc2626' : '#2563eb');

                            return (
                                <Marker
                                    key={location.id}
                                    position={location.position}
                                    icon={icon}
                                    eventHandlers={{
                                        click: () => onLocationClick(location),
                                    }}
                                >
                                    <Popup className="rounded-xl overflow-hidden shadow-xl border-none">
                                        <div className="min-w-[260px] p-0">
                                            {/* Header */}
                                            <div className="bg-[#0E467D] text-white p-3 rounded-xl mb-3 flex items-center gap-2">
                                                <div className="bg-white/20 p-1.5 rounded-full">
                                                    <GiAnchor className="text-white text-sm" />
                                                </div>
                                                <h3 className="font-bold text-sm m-0 tracking-wide text-white">{location.name}</h3>
                                            </div>

                                            {/* Body */}
                                            <div className="space-y-3">
                                                <div className="flex items-start gap-2">
                                                    <svg className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                    <p className="text-gray-600 text-sm m-0 font-medium leading-relaxed">
                                                        {location.address}
                                                    </p>
                                                </div>

                                                <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                                                    <span className="text-[12px] text-gray-600 font-mono bg-gray-100 px-2 py-1 rounded">
                                                        {location.position[0].toFixed(4)}, {location.position[1].toFixed(4)}
                                                    </span>

                                                    <a
                                                        href={`https://www.google.com/maps?q=${location.position[0]},${location.position[1]}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#532404] hover:bg-[#401b02] text_white text-xs font-bold rounded-md transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                                                    >
                                                        <span>Directions</span>
                                                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </Popup>
                                </Marker>
                            );
                        })}
                    </MapContainer>
                );

                setMapComponent(() => ClientMap);
            });
        });
    }, []);

    // Bhubaneswar locations data
    const locations = useMemo(() => [
        {
            id: 1,
            name: "The Captain's Cafe",
            address: "Ekamra Kanan RD, near Chillika Fresh, Rental Colony, IRC Village, Nayapalli, Bhubaneswar, Odisha 751015",
            position: [20.291392769248414, 85.80446835180321]
        },
        {
            id: 2,
            name: "The Captain's Cafe",
            address: "782, Maharishi College Rd, Saheed Nagar, Bhubaneswar, Odisha 751007",
            position: [20.285706498658982, 85.84578066606268]
        },
        {
            id: 3,
            name: "Scottish Catering Kitchen",
            address: "CUTM, Ramachandrapur, Jatni, Bhubaneswar, Odisha 752050",
            position: [20.173601244795684, 85.70743631591344]
        }
    ], []);

    // Filter locations based on search term
    const filteredLocations = locations.filter(location =>
        location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        location.address.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleLocationClick = (location) => {
        setSelectedLocation(location);
        if (isMobile) {
            setShowList(false); // Hide list and show full map on mobile when location is selected
        }
    };

    const toggleView = () => {
        setShowList(!showList);
    };

    return (
        <div className='container pt-4 md:pt-10 px-2 lg:px-0'>
            {/* Mobile Toggle Buttons */}
            {isMobile && (
                <div className="flex mb-4 bg-white rounded-lg shadow-sm border p-1">
                    <button
                        onClick={() => setShowList(true)}
                        className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${showList ? 'bg-blue-950 text-white' : 'text-gray-600 hover:text-gray-900'}`}
                    >
                        List View
                    </button>
                    <button
                        onClick={() => setShowList(false)}
                        className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${!showList ? 'bg-blue-950 text-white' : 'text-gray-600 hover:text-gray-900'}`}
                    >
                        Map View
                    </button>
                </div>
            )}

            <div className={`flex flex-col md:flex-row w-full h-[500px] md:h-[600px] bg-gray-50 rounded-xl overflow-hidden border-2 border-blue-900 shadow-xl ${isMobile ? 'h-50vh' : ''}`}>
                {/* Map Section */}
                <div className={`${isMobile ? (showList ? 'hidden' : 'flex-1 w-full') : 'flex-1 w-full md:w-2/3'} h-full relative`}>
                    {isClient && MapComponent ? (
                        <>
                            <MapComponent
                                locations={locations}
                                selectedLocation={selectedLocation}
                                onLocationClick={handleLocationClick}
                            />
                            {/* Mobile back button */}
                            {isMobile && !showList && (
                                <button
                                    onClick={() => setShowList(true)}
                                    className="absolute top-3 right-3 z-[1000] bg-white border-1 border-blue-900 rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                            )}
                        </>
                    ) : (
                        <div className="flex-1 w-full h-full bg-gray-200 flex items-center justify-center">
                            <div className="text-center">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
                                <p className="mt-2 text-gray-600">Loading Bhubaneswar Map...</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Address List Section */}
                <div className={`${isMobile ? (showList ? 'flex-1 w-full' : 'hidden') : 'w-full md:w-1/3'} overflow-hidden flex flex-col border-l border-gray-200 bg-white dark:bg-gray-950`}>
                    {/* Header */}
                    <div className="py-3 px-3 md:py-4 md:px-2 border-b border-gray-200 dark:border-gray-800">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search here"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-3 py-2 md:py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-800 dark:focus:ring-orange-500 focus:border-transparent bg-gray-50 dark:bg-gray-900 text-sm md:text-base"
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="h-4 w-4 md:h-5 md:w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Locations List */}
                    <div className="flex-1 overflow-y-auto">
                        {filteredLocations.length === 0 ? (
                            <div className="p-6 md:p-8 text-center text-gray-500">
                                <svg className="w-10 h-10 md:w-12 md:h-12 mx-auto text-gray-300 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="text-sm md:text-base">No locations found matching your search.</p>
                            </div>
                        ) : (
                            <div className="divide-y divide-gray-200 dark:divide-gray-800">
                                {filteredLocations.map((location) => (
                                    <div
                                        key={location.id}
                                        className={`py-3 px-3 md:py-3 md:px-4 cursor-pointer transition-all duration-200 ${selectedLocation?.id === location.id
                                            ? 'bg-blue-50 border-l-4 border-blue-900'
                                            : 'hover:bg-gray-50 dark:hover:bg-gray-900'
                                            }`}
                                        onClick={() => handleLocationClick(location)}
                                    >
                                        <div className="flex items-start gap-2">
                                            <GiAnchor size={16} className={`mt-1 rotate-z-45 ${selectedLocation?.id === location.id ? 'text-blue-900' : 'text-amber-800 dark:text-orange-100'}`} />
                                            <div className="flex-1 space-y-1 min-w-0">
                                                <div className="flex items-center gap-2">
                                                    <h3 className={`font-semibold text-sm md:text-md truncate ${selectedLocation?.id === location.id ? 'text-blue-800' : 'text-amber-800 dark:text-orange-100'
                                                        }`}>
                                                        {location.name}
                                                    </h3>
                                                </div>

                                                <p className="text-gray-400 text-xs md:text-sm leading-relaxed line-clamp-2">
                                                    {location.address}
                                                </p>

                                                <div className="flex items-center text-xs text-gray-500 pt-1">
                                                    <svg className="w-3 h-3 mr-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    </svg>
                                                    <span className="text-xs">{location.position[0].toFixed(4)}, {location.position[1].toFixed(4)}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Selection indicator */}
                                        {selectedLocation?.id === location.id && (
                                            <div className="flex items-center mt-2 text-green-600 text-xs md:text-sm">
                                                <svg className="w-3 h-3 md:w-4 md:h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                Selected on map
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="p-2 md:p-2 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                        <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-300">
                            <span className="text-xs md:text-sm">
                                {filteredLocations.length} of {locations.length} locations
                            </span>
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                                Bhubaneswar
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile floating action button */}
            {isMobile && !showList && (
                <button
                    onClick={() => setShowList(true)}
                    className="fixed bottom-6 right-6 z-50 bg-blue-500 text-white rounded-full p-4 shadow-lg hover:bg-blue-600 transition-colors md:hidden"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            )}
        </div>
    );
};

export default MapsView;
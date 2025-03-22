'use client';

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const api_key = process.env.GOOGLE_MAP_API_KEY || '';

const Map = () => {
	// Координаты для центра карты и метки
	const center = { lat: 42.869578, lng: 74.584484 };
	const markerPosition = { lat: 42.869578, lng: 74.584484 };

	return (
		<LoadScript googleMapsApiKey={api_key}>
			<GoogleMap
				mapContainerStyle={{ height: '500px', width: '100%' }}
				center={center}
				zoom={16}
			>
				<Marker position={markerPosition} />
			</GoogleMap>
		</LoadScript>
	);
};

export default Map;

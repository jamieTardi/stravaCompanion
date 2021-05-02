import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';

const Map = () => {
	const mapContainer = useRef();
	const [lng, setLng] = useState(-70.9);
	const [lat, setLat] = useState(42.35);
	const [zoom, setZoom] = useState(9);

	mapboxgl.workerClass = MapboxWorker;
	mapboxgl.accessToken =
		'pk.eyJ1IjoiamFtaWUtdGFyZGkiLCJhIjoiY2tvNnlpb2xtMDN6ZDJ3cWthemZndXRscCJ9.3UrX_00nmEOddsDN2meRAQ';

	useEffect(() => {
		const map = new mapboxgl.Map({
			container: mapContainer.current,
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [lng, lat],
			zoom: zoom,
		});
		return () => map.remove();
	}, []);

	return (
		<div>
			<div className='map-container' ref={mapContainer} />
		</div>
	);
};

export default Map;

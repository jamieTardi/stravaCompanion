import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';

const Map = ({ activities }) => {
	const mapContainer = useRef();
	const [lng, setLng] = useState(-1.295513);
	const [lat, setLat] = useState(51.40869);
	const [zoom, setZoom] = useState(18);
	const [start, setStart] = useState(null);

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

		map.on('move', () => {
			setLng(map.getCenter().lng.toFixed(4));
			setLat(map.getCenter().lat.toFixed(4));
			setZoom(map.getZoom().toFixed(2));
		});

		return () => map.remove();
	}, []);

	return (
		<>
			<div>
				<div className='sidebar'>
					Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
				</div>
				<div className='map-container'>
					<div className='map' ref={mapContainer} />
				</div>
			</div>
		</>
	);
};

export default Map;

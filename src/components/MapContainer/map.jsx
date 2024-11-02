import { useEffect } from 'react';
import './map.css';
import {APIProvider, Map, useMap} from '@vis.gl/react-google-maps';

export const GoogleMapContainer = () => {
  const map = useMap();
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  console.log("API Key:", apiKey);

  useEffect(() => {
    if(!map) return;
    console.log("hola probando");
  },[map])
  return (
    <div>
    <APIProvider apiKey={apiKey}>
    <Map
      style={{width: '100vw', height: '100vh'}}
      defaultCenter={{lat: 22.54992, lng: 0}}
      defaultZoom={3}
      gestureHandling={'greedy'}
      disableDefaultUI={true}
    />
    </APIProvider>
    </div>
  );
}

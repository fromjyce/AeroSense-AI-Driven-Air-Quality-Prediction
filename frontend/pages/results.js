'use client';

import { useSearchParams } from 'next/navigation';
import MapContainer from './components/MapContainer';
import InformationBoard from './components/InformationBoard';
import "../app/globals.css";

export default function Results() {
  const searchParams = useSearchParams();
  const message = searchParams.get('message');
  const markers = [
    { lat: 28.61, lng: 77.238, title: 'Marker 1' },
    { lat: 28.62, lng: 77.239, title: 'Marker 2' },
    { lat: 28.63, lng: 77.240, title: 'Marker 3' },
  ];

  return (
      <div className="min-h-screen result-background">
          <h1 className="text-3xl font-bold text-center py-6 predict-title">Predictions</h1>
        <div className="flex flex-row justify-between p-5">
          <div className="w-1/3 mr-5 border border-gray-300 rounded-lg shadow-lg p-4 bg-white">
          <MapContainer markers={markers} />
          </div>
          <div className="w-2/3 border border-gray-300 rounded-lg shadow-lg p-4 bg-white">
              <h2 className="text-xl font-semibold mb-2 text-center">Additional Information</h2>
              <InformationBoard />
          </div>
        </div>
      </div>
  );
}

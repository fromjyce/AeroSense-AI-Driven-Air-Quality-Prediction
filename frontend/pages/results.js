'use client';

import { useSearchParams } from 'next/navigation';
import MapContainer from './components/MapContainer';
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
        <div className="text-center py-6">
          <h1 className="text-3xl font-bold">Predictions</h1>
        </div>

        <div className="flex flex-row justify-between p-5">
          <div className="w-1/3 mr-5 border border-gray-300 rounded-lg shadow-lg p-4 bg-white">
          <MapContainer markers={markers} />
          </div>
          <div className="w-2/3">
            <div className="border border-gray-300 rounded-lg shadow-lg p-4 bg-white">
              <h2 className="text-xl font-semibold mb-2">Additional Information</h2>
              {message ? (
                <p className="text-lg text-gray-700">{message}</p>
              ) : (
                <p className="text-lg text-gray-500">No message available.</p>
              )}
              <p className="text-lg text-gray-700">Display other relevant results or details here.</p>
            </div>
          </div>
        </div>
      </div>
  );
}

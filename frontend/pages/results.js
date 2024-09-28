'use client';
import Image from "next/image";
import { useSearchParams } from 'next/navigation';
import MapContainer from './components/MapContainer';
import InformationBoard from './components/InformationBoard';
import "../app/globals.css";
import AISuggestionsContainer from './components/elements/AISuggestionsContainer';
import Link from 'next/link';

export default function Results() {
  const searchParams = useSearchParams();
  const message = searchParams.get('message');
  const markers = [
    { lat: 13.0843, lng: 80.2705, title: 'Chennai' },
  ];

  return (
    <div className="min-h-screen result-background flex flex-col">
      <div className='flex flex-col items-center'>
        <div className="flex items-center space-x-2 self-start ml-3 mt-2">
          <Image
            src="/logo.png"
            alt="AirSense"
            width={55}
            height={55}
          />
          <h1 className="text-3xl font-bold results-logo">AeroSense</h1>
        </div>
        <h1 className="text-3xl font-bold text-center predict-title">View your Predictions</h1>
      </div>
      <div className='flex flex-col gap-5'>
        <div className="flex flex-row justify-between p-5">
          <div className="w-1/3 mr-5 border border-gray-300 rounded-lg shadow-lg p-3 bg-white">
            <MapContainer markers={markers} />
          </div>
          <div className="w-2/3 border border-gray-300 rounded-lg shadow-lg p-4 bg-white">
            <InformationBoard />
          </div>
        </div>
        <div className='p-5 ai-suggestion-container'>
          <AISuggestionsContainer /> 
        </div>
        <div className='flex flex-row justify-center items-center p-5 button-container'>
          <div className='text-center flex flex-row gap-3 justify-center items-center'>
            <p className="text-xl">Want to Predict Again?</p>
            <Link href="/">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 button-back transition text-lg">
                Go Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
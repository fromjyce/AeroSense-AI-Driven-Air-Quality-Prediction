'use client';

import "../../../app/globals.css";

export default function InfoDisplay({formattedDate}) {

  return (
    <>
    <h1 className="text-lg font-semibold">Information</h1>
        <p className="text-lg text-gray-700">{formattedDate}</p>
        <p className="text-lg text-gray-700">City: Chennai, Tamil Nadu</p>
    </>
  );
}

'use client';

import "../../../app/globals.css";

export default function InfoDisplay({formattedDate}) {

  return (
    <>
        <p className="text-2xl">{formattedDate}</p>
        <p className="text-2xl">City: Chennai, Tamil Nadu</p>
    </>
  );
}

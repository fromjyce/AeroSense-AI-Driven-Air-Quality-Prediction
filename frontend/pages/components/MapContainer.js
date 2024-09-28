'use client';

import React from 'react';
import Map from './elements/GoogleMap';

const MapContainer = ({ markers }) => {
  return (
    <div className="h-full w-full rounded-lg">
      <Map markers={markers} />
    </div>
  );
};

export default MapContainer;

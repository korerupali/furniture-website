import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChair } from '@fortawesome/free-solid-svg-icons';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <FontAwesomeIcon icon={faChair} className="text-green-600 bg-white p-2 rounded-full w-8 h-8" />
      <h1 className="text-2xl font-bold text-[green]">Furniture</h1>
    </div>
  );
};

export default Logo;

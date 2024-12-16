import React from 'react';
import { APP_DESCRIPTION } from '../../constants/text';

function Home() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <p className="text-lg text-gray-700">{APP_DESCRIPTION}</p>
    </div>
  );
}

export default Home;
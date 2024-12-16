import React from 'react';
import { APP_TITLE } from '../../constants/text';

function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <h1 className="text-2xl font-bold">{APP_TITLE}</h1>
    </header>
  );
}

export default Header;
import React from 'react';
import Header from '../Header/Header';

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto p-4">
        {children}
      </main>
    </div>
  );
}

export default Layout;
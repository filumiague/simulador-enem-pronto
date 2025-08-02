'use client';
import './globals.css';
import React from 'react';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 text-gray-800 font-sans antialiased transition-all duration-300">
        <div className="max-w-4xl mx-auto p-4">{children}</div>
      </body>
    </html>
  );
}

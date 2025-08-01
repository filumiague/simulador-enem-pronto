'use client';

import './globals.css';
import React from 'react';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="font-sans bg-white text-gray-900">{children}</body>
    </html>
  );
}

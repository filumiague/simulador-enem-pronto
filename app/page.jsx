'use client';
import { useState } from 'react';

export default function Home() {
  const [start, setStart] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-blue-50 text-gray-800 p-6 flex items-center justify-center">
      <div className="w-full max-w-3xl shadow-xl bg-white rounded-2xl p-10 text-center animate-fade-in">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          Simulado ENEM com Imagens
        </h1>
        {!start ? (
          <button
            onClick={() => setStart(true)}
            className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out shadow-md"
          >
            Iniciar simulado
          </button>
        ) : (
          <p className="text-blue-800 text-lg font-medium">Carregando questões...</p>
        )}
      </div>
    </main>
  );
}

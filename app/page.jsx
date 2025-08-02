'use client';

import { useState, useEffect } from 'react';

export default function Page() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  useEffect(() => {
    fetch('/json-questoes-enem/questoes_unificadas.json')
      .then((res) => res.json())
      .then((data) => setQuestions(data.filter(q => q.img && q.img.includes('http'))));
  }, []);

  const handleAnswerClick = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowAnswers(true);
    }
  };

  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-100 text-blue-800 font-semibold">
        Carregando questões...
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-blue-50 text-gray-800 p-6">
      <div className="max-w-3xl mx-auto shadow-xl rounded-2xl p-8 bg-white">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center animate-fade-in">
          Simulado ENEM com Imagens
        </h1>

        {!showAnswers ? (
          <div className="space-y-6 animate-fade-in">
            <img
              src={currentQuestion.img}
              alt="imagem"
              className="w-full max-h-96 object-contain rounded-lg border border-gray-200 shadow-sm"
            />
            <p className="text-lg leading-relaxed font-medium">
              {currentQuestion.pergunta}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentQuestion.alternativas.map((alt, idx) => (
                <button
                  key={idx}
                  onClick={handleAnswerClick}
                  className="bg-blue-100 hover:bg-blue-200 transition duration-200 text-blue-900 font-semibold px-4 py-2 rounded-lg border border-blue-300 shadow-sm"
                >
                  {alt}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center animate-fade-in">
            <h2 className="text-xl font-bold text-green-700 mb-4">Fim do Simulado 🎉</h2>
            <p className="text-gray-600">Você concluiu todas as questões.</p>
          </div>
        )}
      </div>
    </div>
  );
}

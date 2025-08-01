
'use client';

import { useState } from 'react';
import { Question } from '../lib/questions';

interface ResultModalProps {
  isOpen: boolean;
  score: number;
  totalQuestions: number;
  userAnswers: string[];
  questions: Question[];
  onClose: () => void;
  onRestart: () => void;
}

export default function ResultModal({ 
  isOpen, 
  score, 
  totalQuestions, 
  userAnswers,
  questions,
  onClose, 
  onRestart 
}: ResultModalProps) {
  const [showCourses, setShowCourses] = useState(true);
  const [showResults, setShowResults] = useState(false);

  if (!isOpen) return null;

  const percentage = Math.round((score / totalQuestions) * 100);

  const courses = [
    {
      title: "Português e Matemática para Concurso",
      url: "https://www.lk3cursos.com.br/p/curso-preparatorio-portugues-e.html",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgAeGTm_Y5ZzwH97y9g6mKK2ihhwmv7m7h6VRsmy8UCGId-eT8-hHgyJ88BEx5poZg58Ei0WLzipMKM_z5tcPSP9KqpD3NPIlzCWmbep4B1Y5SfJkgqtKBpq85AAns9q5Dz7beaBLJ84Y3IXatZmsEJNN6X7YuAoO79p2Jruiyt7Ef7YtRAXngsZCVj8OM/w400-h400-rw/quadrado.png"
    },
    {
      title: "Português e Redação para Concurso",
      url: "https://www.lk3cursos.com.br/p/portugues-e-redacao-para-concurso.html",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBEITYae_vg4Z5PSjy5OCN5x_ogUBeSh5y34mq34U9qB3Koz-hY54TLTmmaNZXv6I3EsLSXhQsDy34v25IbriTiAJSBaxU1yYFCSoBFs3uuDn-NXJ7CRRpqlexrU4sO-DcvZQiIsXiQ84kWnysmIAGl1mhu4HEEVYUQehiXpjG1yJAigPjp7uvl3gDUIc/w400-h400-rw/quadrado%20portuygues%20para%20concurso.webp"
    },
    {
      title: "Mentoria Disciplinamente",
      url: "https://www.lk3cursos.com.br/p/mentoria-disciplinamente-venca.html",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3Q9vCMpNUEvuDDgFj67on3-zzTFMldnBnOPgW1Je2nVzPHFJ6khFzl71avtyEjteOemfWmuWU2p2DGJ8jRLGyLFo7HKkpD-w5rgJN2Lgo1RBlRxZ8JiGZgBN6drizxDUzM4-DRJwxrrtMjFxRbRu4wbNg48Rih8ZACwVF_TddjfBV7oLM4bZxV9Jc8FU/s320/00%20-%20Diciplinamente%20Kiwify.png"
    }
  ];

  const getEncouragementMessage = () => {
    if (percentage >= 80) return "Excelente! Você está no caminho certo para o sucesso!";
    if (percentage >= 60) return "Bom trabalho! Continue estudando e você chegará lá!";
    if (percentage >= 40) return "Não desista! Cada erro é uma oportunidade de aprender!";
    return "O sucesso vem para quem persiste! Continue praticando!";
  };

  if (showCourses && !showResults) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Aprimore seus conhecimentos</h2>
              <p className="text-gray-600">Confira os cursos LK3 para se preparar ainda melhor:</p>
            </div>

            <div className="space-y-4 mb-6">
              {courses.map((course, index) => (
                <a
                  key={index}
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all duration-200"
                >
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800 text-sm">{course.title}</h4>
                  </div>
                  <i className="ri-external-link-line text-gray-400"></i>
                </a>
              ))}
            </div>

            <button
              onClick={() => {
                setShowCourses(false);
                setShowResults(true);
              }}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 !rounded-button"
            >
              Ir para o resultado
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-md w-full">
          <div className="p-6">
            <div className="text-center mb-6">
              <div className="w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <i className="ri-trophy-line text-3xl text-blue-500"></i>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Resultado Final</h2>
              <div className="text-4xl font-bold text-blue-500 mb-2">{percentage}%</div>
              <p className="text-gray-600 mb-4">
                Você acertou {score} de {totalQuestions} questões
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-6">
                <p className="text-blue-800 font-medium text-sm">
                  {getEncouragementMessage()}
                </p>
              </div>
            </div>

            <button
              onClick={onRestart}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 !rounded-button"
            >
              Fazer Novo Simulado
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

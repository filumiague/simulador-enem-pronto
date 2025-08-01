
'use client';

import { Question } from '../lib/questions';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  selectedAnswer: string | null;
  onAnswerSelect: (answer: string) => void;
  onNext: () => void;
}

export default function QuestionCard({ 
  question, 
  questionNumber, 
  selectedAnswer, 
  onAnswerSelect, 
  onNext
}: QuestionCardProps) {
  const alternatives = [
    { key: 'A', text: question.alternative_a },
    { key: 'B', text: question.alternative_b },
    { key: 'C', text: question.alternative_c },
    { key: 'D', text: question.alternative_d },
    { key: 'E', text: question.alternative_e },
  ];

  const getAlternativeStyle = (key: string) => {
    return selectedAnswer === key 
      ? 'bg-blue-100 border-blue-500 border-2' 
      : 'bg-white border-gray-300 hover:border-blue-300';
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
              {questionNumber}
            </div>
            <div className="text-sm text-gray-600">
              {question.subject} - ENEM {question.year}
            </div>
          </div>
          
          <div className="text-gray-800 leading-relaxed mb-6">
            {question.statement}
          </div>
        </div>

        <div className="space-y-3 mb-6">
          {alternatives.map((alt) => (
            <button
              key={alt.key}
              className={`w-full p-4 rounded-lg border text-left transition-all duration-200 ${getAlternativeStyle(alt.key)}`}
              onClick={() => onAnswerSelect(alt.key)}
            >
              <div className="flex items-start gap-3">
                <span className="font-bold text-blue-600 min-w-[24px]">
                  {alt.key})
                </span>
                <span className="text-gray-700">{alt.text}</span>
              </div>
            </button>
          ))}
        </div>

        <button
          onClick={onNext}
          disabled={!selectedAnswer}
          className={`w-full font-semibold py-4 px-6 rounded-lg transition-colors duration-200 !rounded-button ${
            selectedAnswer 
              ? 'bg-blue-500 hover:bg-blue-600 text-white' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Próxima Questão
        </button>
      </div>
    </div>
  );
}

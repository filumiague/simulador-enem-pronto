'use client';

import { useState, useEffect } from 'react';
import QuestionCard from '../components/QuestionCard';
import ProgressBar from '../components/ProgressBar';
import ResultModal from '../components/ResultModal';

export default function Home() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  useEffect(() => {
    async function fetchQuestions() {
      const response = await fetch("https://raw.githubusercontent.com/gabriel-antonelli/extract-enem-data/main/enem_2023.json");
      const data = await response.json();
      const shuffled = data.sort(() => 0.5 - Math.random()).slice(0, 15);
      setQuestions(shuffled);
    }

    if (quizStarted && questions.length === 0) {
      fetchQuestions();
    }
  }, [quizStarted]);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    setTimeout(() => {
      setUserAnswers([...userAnswers, answer]);
      setSelectedAnswer(null);
      if (currentQuestionIndex + 1 < questions.length) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setShowModal(true);
      }
    }, 300);
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setUserAnswers([]);
    setShowModal(false);
    setQuestions([]);
    setQuizStarted(false);
  };

  return (
    <main className="max-w-3xl mx-auto p-4">
      {!quizStarted ? (
        <div className="text-center mt-10">
          <h1 className="text-2xl font-bold mb-4">Simulado ENEM com Imagens</h1>
          <button
            onClick={() => setQuizStarted(true)}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all"
          >
            Iniciar simulado
          </button>
        </div>
      ) : questions.length > 0 ? (
        <>
          <ProgressBar
            current={currentQuestionIndex + 1}
            total={questions.length}
          />
          <QuestionCard
            question={questions[currentQuestionIndex]}
            selected={selectedAnswer}
            onAnswer={handleAnswer}
          />
          <ResultModal
            show={showModal}
            questions={questions}
            userAnswers={userAnswers}
            onRestart={restartQuiz}
          />
        </>
      ) : (
        <p className="text-center mt-10">Carregando questões...</p>
      )}
    </main>
  );
}

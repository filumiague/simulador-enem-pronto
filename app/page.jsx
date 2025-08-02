
'use client';
import React, { useState, useEffect } from 'react';
import QuestionCard from '@/components/QuestionCard';
import ResultModal from '@/components/ResultModal';
import { motion } from 'framer-motion';

const TOTAL_QUESTIONS = 10;

export default function Home() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchQuestions() {
      const years = [
        '2009','2010','2011','2012','2013','2014','2015','2016',
        '2017','2018','2019','2020','2021','2022','2023'
      ];
      let allQuestions = [];

      for (const year of years) {
        try {
          const res = await fetch(`/json-questoes-enem/enem_${year}.json`);
          const data = await res.json();
          const validQuestions = data.filter(q => q.imagem && q.pergunta && q.alternativas);
          allQuestions = allQuestions.concat(validQuestions);
        } catch (e) {
          console.warn(`Erro ao carregar JSON do ano ${year}`, e);
        }
      }

      allQuestions = allQuestions.sort(() => 0.5 - Math.random()).slice(0, TOTAL_QUESTIONS);
      setQuestions(allQuestions);
      setIsLoading(false);
    }
    fetchQuestions();
  }, []);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(prev => prev + 1);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 text-gray-800 px-4 py-8 flex flex-col items-center justify-center">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-3xl font-bold mb-6 text-center">
        Simulado ENEM com Imagens
      </motion.h1>

      {isLoading ? (
        <p className="text-lg animate-pulse">Carregando questões...</p>
      ) : showResult ? (
        <ResultModal score={score} total={questions.length} />
      ) : (
        <QuestionCard
          question={questions[currentQuestion]}
          questionIndex={currentQuestion}
          totalQuestions={questions.length}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
}

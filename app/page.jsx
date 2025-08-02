'use client'

import { useEffect, useState } from 'react'
import QuestionCard from '../components/QuestionCard'
import ProgressBar from '../components/ProgressBar'
import ResultModal from '../components/ResultModal'
import { carregarQuestoesAleatorias } from '../fetchQuestoes'

export default function Home() {
  const [questoes, setQuestoes] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState([])
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [quizStarted, setQuizStarted] = useState(false)

  useEffect(() => {
    const carregar = async () => {
      try {
        const data = await carregarQuestoesAleatorias()
        setQuestoes(data)
      } catch (error) {
        console.error('Erro ao carregar questões:', error)
      }
    }
    carregar()
  }, [])

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer)
    setTimeout(() => {
      setUserAnswers((prev) => [...prev, answer])
      setSelectedAnswer(null)
      if (currentQuestionIndex + 1 < questoes.length) {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
      } else {
        setShowModal(true)
      }
    }, 500)
  }

  const restartQuiz = () => {
    setCurrentQuestionIndex(0)
    setUserAnswers([])
    setShowModal(false)
    setQuizStarted(false)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800 text-white px-4 py-6">
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-center mb-6">Simulado ENEM com Imagens</h1>

        {!quizStarted ? (
          <div className="text-center">
            <button
              onClick={() => setQuizStarted(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md shadow-lg transition-all"
            >
              Iniciar Simulado
            </button>
          </div>
        ) : questoes.length === 0 ? (
          <p className="text-center">Carregando questões...</p>
        ) : (
          <>
            <ProgressBar current={currentQuestionIndex + 1} total={questoes.length} />
            <QuestionCard
              questao={questoes[currentQuestionIndex]}
              selected={selectedAnswer}
              onAnswer={handleAnswer}
            />
          </>
        )}

        <ResultModal
          show={showModal}
          questions={questoes}
          userAnswers={userAnswers}
          onRestart={restartQuiz}
        />
      </div>
    </div>
  )
}

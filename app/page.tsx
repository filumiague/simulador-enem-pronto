'use client'

import { useEffect, useState } from 'react'
import QuestionCard from '../components/QuestionCard'
import ProgressBar from '../components/ProgressBar'
import ResultModal from '../components/ResultModal'
import { carregarQuestoesAleatorias } from '../fetchQuestoes'

type Questao = {
  ano: number
  materia: string
  numero: number
  questao: string
  alternativas: {
    a: string
    b: string
    c: string
    d: string
    e: string
  }
  correta: string
  imagens?: string[]
}

export default function Home() {
  const [questoes, setQuestoes] = useState<Questao[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState<string[]>([])
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
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

  const handleAnswer = (answer: string) => {
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
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Simulado ENEM com Imagens</h1>
      {!quizStarted ? (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setQuizStarted(true)}
        >
          Iniciar simulado
        </button>
      ) : questoes.length === 0 ? (
        <p>Carregando questões...</p>
      ) : (
        <>
          <ProgressBar current={currentQuestionIndex + 1} total={questoes.length} />
          <QuestionCard
            question={questoes[currentQuestionIndex]}
            selected={selectedAnswer}
            onAnswer={handleAnswer}
          />
        </>
      )}
      <ResultModal
        show={showModal}
        questoes={questoes}
        respostas={userAnswers}
        onRestart={restartQuiz}
      />
    </div>
  )
}

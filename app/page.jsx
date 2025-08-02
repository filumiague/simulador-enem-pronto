'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [questoes, setQuestoes] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [userAnswers, setUserAnswers] = useState([])
  const [showResult, setShowResult] = useState(false)
  const [start, setStart] = useState(false)

  useEffect(() => {
    if (start) {
      fetch('/json-questoes-enem/2020.json')
        .then((res) => res.json())
        .then((data) => {
          const questoesFiltradas = data.filter((q) => q.imagens && q.imagens.length > 0)
          setQuestoes(questoesFiltradas.sort(() => 0.5 - Math.random()).slice(0, 10))
        })
    }
  }, [start])

  const handleAnswer = (letra) => {
    setUserAnswers([...userAnswers, letra])
    setTimeout(() => {
      if (currentQuestionIndex + 1 < questoes.length) {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
        setSelectedAnswer(null)
      } else {
        setShowResult(true)
      }
    }, 500)
    setSelectedAnswer(letra)
  }

  const restart = () => {
    setStart(false)
    setQuestoes([])
    setUserAnswers([])
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setShowResult(false)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-blue-50 p-6 text-gray-900 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-2xl p-8 text-center animate-fade-in">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Simulado ENEM com Imagens</h1>

        {!start ? (
          <button
            onClick={() => setStart(true)}
            className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out shadow-md"
          >
            Iniciar simulado
          </button>
        ) : questoes.length === 0 ? (
          <p className="text-blue-800 text-lg font-medium">Carregando questões...</p>
        ) : showResult ? (
          <div>
            <p className="text-xl font-semibold text-green-700 mb-4">
              Você acertou {questoes.filter((q, i) => q.correta === userAnswers[i]).length} de{' '}
              {questoes.length} questões!
            </p>
            <button
              onClick={restart}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Tentar novamente
            </button>
          </div>
        ) : (
          <div className="text-left">
            <div className="mb-4 text-sm text-gray-600">
              Questão {currentQuestionIndex + 1} de {questoes.length}
            </div>
            <p className="font-semibold mb-4">{questoes[currentQuestionIndex].questao}</p>
            {questoes[currentQuestionIndex].imagens?.map((src, i) => (
              <img key={i} src={src} alt="imagem" className="w-full mb-4 rounded-lg" />
            ))}
            <div className="grid gap-2">
              {Object.entries(questoes[currentQuestionIndex].alternativas).map(([letra, texto]) => (
                <button
                  key={letra}
                  onClick={() => handleAnswer(letra)}
                  className={`px-4 py-2 rounded border text-left ${
                    selectedAnswer === letra
                      ? letra === questoes[currentQuestionIndex].correta
                        ? 'bg-green-200 border-green-400'
                        : 'bg-red-200 border-red-400'
                      : 'bg-white hover:bg-blue-100 border-gray-300'
                  }`}
                >
                  <strong>{letra.toUpperCase()})</strong> {texto}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

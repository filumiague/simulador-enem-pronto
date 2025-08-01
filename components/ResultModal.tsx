export default function ResultModal({ show, questions, userAnswers, onRestart }) {
  if (!show) return null;

  const correct = questions.filter((q, i) => q.gabarito === userAnswers[i]).length;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">Resultado</h2>
        <p className="mb-4">Você acertou {correct} de {questions.length} questões.</p>
        <button
          onClick={onRestart}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
        >
          Refazer simulado
        </button>
      </div>
    </div>
  );
}

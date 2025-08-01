export default function QuestionCard({ question, selected, onAnswer }) {
  return (
    <div className="mt-8">
      {question.imagens?.length > 0 && (
        <img src={question.imagens[0]} alt="imagem" className="mb-4" />
      )}
      <p className="mb-4">{question.questao}</p>
      {['a', 'b', 'c', 'd', 'e'].map((key) => (
        <button
          key={key}
          onClick={() => onAnswer(key)}
          className={`block w-full text-left border p-2 mb-2 rounded ${
            selected === key ? 'bg-blue-100' : ''
          }`}
        >
          {key}) {question.alternativas[key]}
        </button>
      ))}
    </div>
  );
}

// components/QuestionCard.jsx
export default function QuestionCard({ questao, selected, onAnswer }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 transition-transform duration-300 transform hover:scale-[1.01]">
      <h2 className="text-xl font-bold text-blue-700 mb-4">
        Questão {questao.numero} - {questao.materia} ({questao.ano})
      </h2>

      {questao.imagens?.map((url, idx) => (
        <img
          key={idx}
          src={url}
          alt={`Imagem ${idx + 1}`}
          className="w-full mb-4 rounded-md border"
        />
      ))}

      <p className="mb-4 text-gray-800 leading-relaxed">{questao.questao}</p>

      <div className="space-y-2">
        {Object.entries(questao.alternativas).map(([letra, texto]) => (
          <button
            key={letra}
            onClick={() => onAnswer(letra)}
            className={`w-full text-left px-4 py-3 rounded-md border transition duration-200
              ${selected === letra ?
                'bg-blue-500 text-white border-blue-600' :
                'hover:bg-blue-100 border-gray-300 bg-white'}
            `}
            disabled={!!selected}
          >
            <strong className="mr-2">{letra.toUpperCase()})</strong> {texto}
          </button>
        ))}
      </div>
    </div>
  )
}

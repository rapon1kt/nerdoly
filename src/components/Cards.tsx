export function Cards() {
  return (
    <div className="flex flex-col items-center mt-22">
      <span className="px-3.5 py-0.5 bg-pinkcard rounded-full text-center border-ink border-2 text-white mb-6">
        Como funciona?
      </span>
      <span className="font-bold text-3xl mb-10">
        Três diferenciais, um só app.
      </span>
      <div className="flex grid-cols-3 gap-4">
        <div className="bg-card shadow-maincard rounded-2xl border-ink border-3 w-82 h-52 flex flex-col justify-center p-4 transition transform hover:scale-102 transition ease-in">
          <div className="shadow-2xl rounded-full border-ink border-2 w-11 h-11 flex items-center justify-center mb-3.5">
            📓
          </div>
          <h3 className="font-bold text-lg leading-tight mb-1.5">
            Rascunhos livres
          </h3>
          <span className="text-[#5A5A52]">
            publique como você estuda — mapa mental, resumo torto, macete que só
            você entende. Outro nerd vai agradecer.
          </span>
        </div>
        <div className="bg-card shadow-maincard rounded-2xl border-ink border-3 w-82 h-52 flex flex-col justify-center p-4 transition transform hover:scale-102 transition ease-in">
          <div className="shadow-2xl rounded-full border-ink border-2 w-11 h-11 flex items-center justify-center mb-3.5">
            🤖
          </div>
          <h3 className="font-bold text-lg leading-tight mb-1.5">IA própria</h3>
          <span className="text-[#5A5A52]">
            organiza seus rascunhos, recomenda o que combina com você e tira
            dúvida na hora.
          </span>
        </div>
        <div className="bg-card shadow-maincard rounded-2xl border-ink border-3 w-82 h-52 flex flex-col justify-center p-4 transition transform hover:scale-102 transition ease-in">
          <div className="shadow-2xl rounded-full border-ink border-2 w-11 h-11 flex items-center justify-center mb-3.5">
            🧑‍🏫
          </div>
          <h3 className="font-bold text-lg leading-tight mb-1.5">
            Professores na rede
          </h3>
          <span className="text-[#5A5A52]">
            Professores podem usar a rede para compartilhar conhecimento, ajudar
            alunos e organizar aulas.
          </span>
        </div>
      </div>
    </div>
  );
}

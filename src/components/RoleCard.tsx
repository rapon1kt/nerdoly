import React, { useState } from "react";

export default function RoleCard() {
  const [role, setRole] = useState("aluno");
  const [hasClicked, setHasClicked] = useState(false);

  const setRoleToAluno = () => {
    setRole("aluno");
    setHasClicked(true);
  };

  const setRoleToProfessor = () => {
    setRole("professor");
    setHasClicked(true);
  };

  return (
    <div className="mt-22 flex flex-col items-center">
      <span className="px-3.5 py-0.5 bg-pinkcard rounded-full text-center border-ink border-2 text-white mb-6 w-42 flex">
        Cada um com o seu
      </span>
      <span className="font-bold text-3xl mb-10">
        Aluno e professor, telas diferentes.
      </span>
      <div className="bg-card shadow-maincard rounded-2xl border-3 border-ink p-7.5 w-222">
        <button
          className={`bg-paper px-5 py-2.5 rounded-2xl border-2 border-ink text-black mr-4 ${
            role === "professor" ? "" : "bg-pinkcard text-white"
          } transition-all duration-150 ease-in-out hover:scale-105 active:scale-95 active:shadow-inner cursor-pointer`}
          onClick={setRoleToAluno}
        >
          🧑‍🎓 Sou aluno
        </button>
        <button
          className={`bg-paper px-5 py-2.5 rounded-2xl border-2 border-ink text-black ${
            role === "aluno" ? "" : "bg-pinkcard text-white"
          } transition-all duration-150 ease-in-out hover:scale-105 active:scale-95 active:shadow-inner cursor-pointer`}
          onClick={setRoleToProfessor}
        >
          🧑‍🏫 Sou professor
        </button>
        <ul
          key={role}
          className={`text-[#5A5A52] mt-6 flex flex-col gap-1 ${
            hasClicked ? "animate-fade-scale" : ""
          }`}
        >
          <div className="relative before:content-['✓'] before:absolute before:left-0 before:text-[#6c5ce7] before:font-extrabold">
            {role === "professor" && (
              <li>
                <b className="text-black pl-5">Publique seus rascunhos</b> -
                resumo, mapa mental ou foto do caderno, do seu jeito.
              </li>
            )}
            {role === "aluno" && (
              <li>
                <b className="text-black pl-5">Organize sua turma</b> — adicione
                alunos e acompanhe o progresso de todo mundo.
              </li>
            )}
          </div>
          <div className="relative before:content-['✓'] before:absolute before:left-0 before:text-[#6c5ce7] before:font-extrabold">
            {role === "professor" && (
              <li>
                <b className="text-black pl-5">
                  Descubra rascunhos de outros nerds
                </b>{" "}
                — o Nerdólio organiza por matéria e sugere o que combina com
                você.
              </li>
            )}
            {role === "aluno" && (
              <li>
                <b className="text-black pl-5">Publique material oficial</b> —
                separado visualmente do que os alunos postam.
              </li>
            )}
          </div>
          <div className="relative before:content-['✓'] before:absolute before:left-0 before:text-[#6c5ce7] before:font-extrabold">
            {role === "professor" && (
              <li>
                <b className="text-black pl-5">Tire dúvidas na hora</b> — com o
                Nerdólio, tire dúvidas na hora, com um professor de verdade se
                precisar.
              </li>
            )}
            {role === "aluno" && (
              <li>
                <b className="text-black pl-5">Valide rascunhos</b> — dê o
                selinho de confiança no que está certo.
              </li>
            )}
          </div>
        </ul>
        <button
          className="mt-6 px-3 py-1 text-center bg-pinkcard rounded-full border-ink shadow-main border-2 text-white transition-all duration-150 ease-out
        hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_#1A1A1A]
        active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0_#1A1A1A] cursor-pointer"
        >
          Entrar como {role} →
        </button>
      </div>
    </div>
  );
}

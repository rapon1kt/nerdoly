"use client";

import NavBar from "@/components/NavBar";
import { Cards } from "@/components/Cards";
import Mascot from "@/components/Mascot";
import CustomButton from "@/components/CustomButton";
import RoleCard from "@/components/RoleCard";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

export default function Home() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  const phrases = [
    "Oi! Pronto para virar um nerd de verdade?",
    "Bora fazer o diagnóstico?",
    "Seus rascunhos podem ajudar alguém!",
    "A IA tá de olho, sem julgar!",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3200);

    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <div className="flex flex-col items-center min-h-screen font-baloo">
      <NavBar />
      <div className="flex">
        <div className="w-full flex pt-22 mr-41 flex-col">
          <h1 className="text-5xl font-bold mb-2">Confuso nos estudos?</h1>
          <span className="flex w-62 text-center text-5xl font-bold mb-4 bg-lime py-0.5 px-2 inline-block rounded-xl transform transition-transform -rotate-2 text-white">
            Nem mais.
          </span>
          <span className="w-112 text-xl text-[#40322C] mb-6">
            Compartilhe seus rascunhos de estudo, aprenda com os macetes de
            outros nerds e deixa nossa IA montar sua trilha. Professor também tá
            de olho pra garantir que nada de errado passe.
          </span>
          <CustomButton text="Começar →" />
          <span className="text-[#40322C]">
            Sem cartão, sem enrolação, só{" "}
            <span className="underline text-pinkcard">nerdice</span>
          </span>
        </div>

        <div className="flex flex-col items-center justify-center relative w-full max-w-[280px] pt-14">
          <div className="relative bg-white border-[2.5px] border-[#1A1A1A] rounded-2xl px-4 font-baloo font-bold text-sm text-center mb-4 h-[64px] flex items-center justify-center w-full transition-opacity duration-300">
            {phrases[phraseIndex]}
            <div className="absolute -bottom-[12px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[12px] border-l-transparent border-r-transparent border-t-[#1A1A1A]"></div>
            <div className="absolute -bottom-[9px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[10px] border-l-transparent border-r-transparent border-t-white z-10"></div>
          </div>
          <Mascot />
        </div>
      </div>
      <Cards />
      <RoleCard />
      <div className="mt-22 flex flex-col items-center">
        <div className="flex flex-col items-center">
          <span className="px-3.5 py-0.5 bg-pinkcard rounded-full text-center border-ink border-2 text-white w-22 mb-6">
            FAQ
          </span>
          <span className="font-bold text-3xl mb-10">
            Perguntas Frequentes.
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <Faq
            question={"O app já está no ar?"}
            answer="Ainda não para todo mundo. estamos em fase inicial, preencha a lista de espera acima para ficar dentro de tudo!"
          />
          <Faq
            question={"Preciso pagar para usar?"}
            answer="Não. Somos uma plataforma totalmente gratuita com o intuito de ajudar e fazer conexões entre nerds que buscam otimizar seus estudos."
          />
          <Faq
            question={
              "Professores tem acesso a plataforma para fazerem suas aulas por meio do rascunho?"
            }
            answer="Sim, professores podem fazer suas aulas por meio do rascunho e avaliar o trabalho dos alunos."
          />
          <Faq
            question={"Quem garante que meus rascunhos estão certos?"}
            answer="A nossa IA (Nerdólio) está sempre a disposição. Professores também podem avaliar o rascunho de alunos."
          />
        </div>
        <Cta />
        <Footer />
      </div>
    </div>
  );
}

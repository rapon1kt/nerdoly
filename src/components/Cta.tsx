export default function Cta() {
  return (
    <div className="mt-22 min-w-screen h-52 bg-[#6c5ce7] flex flex-col items-center justify-center gap-2 text-white">
      <h2 className="font-bold text-3xl mt-12">Partiu virar nerd?</h2>
      <span className="">
        Estamos começando agora - entre na nossa lista de espera
      </span>
      <button
        className="w-40 mb-8 text-center text-black py-1.5 font-semibold rounded-2xl border-2 border-ink bg-lime shadow-main transition-all duration-150 ease-out
      hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_#1A1A1A]
      active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0_#1A1A1A] cursor-pointer"
      >
        Entrar na lista →
      </button>
    </div>
  );
}

import CustomButton from "./CustomButton";

export default function Cta() {
  return (
    <div className="mt-22 min-w-screen h-52 bg-[#6c5ce7] flex flex-col items-center justify-center gap-2 text-white">
      <h2 className="font-bold text-3xl mt-12">Partiu virar nerd?</h2>
      <span className="">
        Estamos começando agora - entre na nossa lista de espera
      </span>
      <CustomButton
        text="Entrar na lista →"
        className="w-40 mb-8 text-center py-1.5 bg-lime text-black"
      />
    </div>
  );
}

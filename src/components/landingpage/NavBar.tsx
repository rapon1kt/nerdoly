import CustomButton from "./CustomButton";

export default function NavBar() {
  return (
    <div className="flex justify-center font-baloo pt-18">
      <nav className="w-dvh flex justify-between items-center">
        <div className="">
          <span className="font-extrabold text-3xl">
            nerdoly<span className="text-pinkcard">.</span>
          </span>
        </div>
        <div className="flex gap-4 text-white font-semibold">
          <CustomButton text="Sobre" className="w-34 bg-pinkcard" />
          <CustomButton text="Entrar" className="w-34 bg-pinkcard" />
        </div>
      </nav>
    </div>
  );
}

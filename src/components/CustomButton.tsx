export default function CustomButton({ text }: { text: string }) {
  return (
    <button
      className="w-32 mb-4 text-center text-white py-1.5 font-semibold rounded-2xl border-2 border-ink bg-pinkcard shadow-main transition-all duration-150 ease-out
      hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_#1A1A1A]
      active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0_#1A1A1A] cursor-pointer"
    >
      {text}
    </button>
  );
}

import React, { useState } from "react";

export default function Faq(props: {
  question: string;
  answer: string;
}): React.ReactElement {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="bg-white border rounded-2xl shadow-main border-3 border-ink w-162 flex flex-col">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left font-bold text-sm px-4 py-4 flex justify-between items-center cursor-pointer bg-transparent border-none outline-none"
      >
        {props.question}
        <span
          className={`text-xl leading-none ${isOpen ? "text-[#FF3366] transition transform rotate-45 transform-0.2s ease" : "text-black transition transform rotate-0 transform-0.2s ease"}`}
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-4 pb-5 text-[#5A5A52] text-sm">{props.answer}</div>
        </div>
      </div>
    </div>
  );
}

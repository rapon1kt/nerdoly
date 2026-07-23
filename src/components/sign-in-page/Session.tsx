"use client";
import { useState } from "react";

export function Session() {
  return (
    <div>
      <div className="flex bg-[#FFFAE8] mt-12 px-2 py-2 rounded-full border-2 border-black w-142">
        <button className="bg-black text-white px-12 py-3 rounded-full w-1/2">
          crie sua conta
        </button>
        <button className="text-black px-12 py-3 rounded-full w-1/2">
          entrar
        </button>
      </div>
    </div>
  );
}

"use client";
import { useState } from "react";
import { Session } from "@/components/sign-in-page/Session";
import { Input } from "@/components/sign-in-page/Input";
import Mascot from "@/components/Mascot";

export default function SignInPage() {
  const [coverEyes, setCoverEyes] = useState(false);

  return (
    <div className="flex min-h-screen min-w-screen bg-[#6c5ce7] font-baloo login-background">
      <div className="flex w-2/5 background items-center justify-center">
        <div className="flex flex-col w-142">
          <h1 className="text-black font-bold text-3xl">
            nerdoly<span className="text-pinkcard">.</span>
          </h1>
          <span className="text-[#7D7D7D] font-semibold">
            seus rascunhos, seus estudos, suas nerdices.
          </span>
          <div className="flex items-center justify-center">
            <Session />
          </div>
          <Input onPasswordFocusChange={setCoverEyes} />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-3/5">
        <Mascot className="h-100 w-100" coverEyes={coverEyes} />
        <h1 className="text-white font-bold text-3xl">Nerdólio</h1>
        <span className="text-white ">Seu mascote de plantão para revisão</span>
      </div>
    </div>
  );
}

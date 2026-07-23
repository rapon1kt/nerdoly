"use client";
import React, { useState, useActionState, useEffect } from "react";
import CustomButton from "../landingpage/CustomButton";
import registerUserAction from "@/actions/registerUserAction";
import { useRouter } from "next/navigation";

type InputProps = {
  onPasswordFocusChange?: (focused: boolean) => void;
};

export function Input({
  onPasswordFocusChange,
}: InputProps): React.ReactElement {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const initialState = {
    success: false,
    message: "",
    errors: {},
  };

  const [state, formAction, isPending] = useActionState(
    registerUserAction,
    initialState,
  );

  const router = useRouter();

  useEffect(() => {
    if (state.success) {
      router.push("/");
    }
  }, [state.success, router]);

  function handlePasswordFocus() {
    setPasswordFocused(true);
    onPasswordFocusChange?.(true);
  }

  function handlePasswordBlur() {
    setPasswordFocused(false);
    onPasswordFocusChange?.(false);
  }

  return (
    <form action={formAction} className="flex flex-col mt-12 gap-5">
      {state.message && (
        <div
          className={`p-3 rounded-xl text-sm font-semibold ${state.success ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
        >
          {state.message}
        </div>
      )}
      <div className="flex flex-col">
        <span className="pb-2 text-neutral-700 font-semibold">Email</span>
        <input
          name="email"
          type="email"
          className="w-full pl-3.5 pr-12 py-3 border-[2.5px] border-ink rounded-xl bg-white outline-none
            transition-all duration-150 ease-out
            focus:shadow-[4px_4px_0_theme(colors.lime)] focus:-translate-x-0.5 focus:-translate-y-0.5"
          placeholder="NerdUser@gmail.com"
          required
        />
        {state.errors?.email?.errors && (
          <span className="text-red-500 text-xs mt-1 font-semibold">
            {state.errors.email.errors[0]}
          </span>
        )}
      </div>
      <div className="flex flex-col">
        <span className="pb-2 text-neutral-700 font-semibold">Senha</span>
        <div className="relative w-full group">
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            onFocus={handlePasswordFocus}
            onBlur={handlePasswordBlur}
            className="w-full pl-3.5 pr-12 py-3 border-[2.5px] border-ink rounded-xl bg-white outline-none
              transition-all duration-150 ease-out
              focus:shadow-[4px_4px_0_theme(colors.lime)] focus:-translate-x-0.5 focus:-translate-y-0.5"
            placeholder="************"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            onMouseDown={(e) => e.preventDefault()}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-black cursor-pointer flex items-center justify-center
              transition-transform duration-150 ease-out
              hover:scale-110 active:scale-90
              group-focus-within:scale-110 group-focus-within:-translate-x-0.5"
          >
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            )}
          </button>
        </div>
        {state.errors?.password?.errors && (
          <span className="text-red-500 text-xs mt-1 font-semibold">
            {state.errors.password.errors[0]}
          </span>
        )}
      </div>
      <div className="flex flex-col">
        <span className="pb-2 text-neutral-700 font-semibold">
          Confirmar Senha
        </span>
        <div className="relative w-full group">
          <input
            type={showConfirmPassword ? "text" : "password"}
            onFocus={handlePasswordFocus}
            onBlur={handlePasswordBlur}
            className="w-full pl-3.5 pr-12 py-3 border-[2.5px] border-ink rounded-xl bg-white outline-none
              transition-all duration-150 ease-out
              focus:shadow-[4px_4px_0_theme(colors.lime)] focus:-translate-x-0.5 focus:-translate-y-0.5"
            placeholder="************"
            required
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            onMouseDown={(e) => e.preventDefault()}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-black cursor-pointer flex items-center justify-center
              transition-transform duration-150 ease-out
              hover:scale-110 active:scale-90
              group-focus-within:scale-110 group-focus-within:-translate-x-0.5"
          >
            {showConfirmPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <CustomButton
        type="submit"
        disabled={isPending}
        text={isPending ? "Nerdando..." : "Entrar e nerdar →"}
        className="w-60 py-2 mt-5 bg-pinkcard text-white"
      />
    </form>
  );
}

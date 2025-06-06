import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  mode: string;
  text: string;
}

const Button = ({ mode, text, ...props }: ButtonProps) => {
  return (
    <>
      {mode === "white" && (
        <button
          {...props}
          className="bg-white text-white text-center text-xl border border-pink-400 font-normal tracking-[0.6px] leading-[72px] w-full h-12 flex items-center justify-center max-md:text-base"
        >
          {text}
        </button>
      )}

      {mode === "pink" && (
        <button
          {...props}
          className="text-white bg-secondaryPink text-center text-xl font-normal tracking-[0.6px] leading-[72px] w-full h-12 flex items-center justify-center max-md:text-base"
        >
          {text}
        </button>
      )}

      {mode === "transparent" && (
        <button
          {...props}
          className="text-white border-pink border-2 text-center text-xl font-normal tracking-[0.6px] leading-[72px] w-full h-12 flex items-center justify-center max-md:text-base"
        >
          {text}
        </button>
      )}

      {mode !== "white" && mode !== "pink" && mode !== "transparent" && (
        <p>Aucun sélection</p>
      )}
    </>
  );
};
export default Button;

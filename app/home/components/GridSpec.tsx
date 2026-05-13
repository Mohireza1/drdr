import type { ReactNode } from "react";

interface GridSpecProps {
  colSpan?: number;
  text: string;
  children: ReactNode;
  className?: string;
}

export const GridSpec = ({ text, children, className }: GridSpecProps) => {
  return (
    <div
      className={`w-40 md:w-50 relative flex flex-col items-center justify-center gap-3 px-1 py-4 bg-gray-200/40 rounded-lg text-center sm:col-span-1 md:px-8 md:py-10 cursor-pointer transition-all duration-100 hover:bg-gray-200 active:bg-gray-300 ${className}`}
    >
      {children}
      <p className="font-semibold text-sm">{text}</p>
    </div>
  );
};

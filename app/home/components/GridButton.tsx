import type { ReactNode } from "react";

interface GridButtonProps {
  colSpan: number;
  text: string;
  children: ReactNode;
  className?: string;
}

const spanMap: Record<number, string> = {
  2: "col-span-2",
  3: "col-span-3",
};

export const GridButton = ({
  colSpan,
  text,
  children,
  className,
}: GridButtonProps) => {
  const span = spanMap[colSpan] ?? "col-span-1";
  return (
    <div
      className={`${span} relative flex flex-col items-center gap-3 px-1 py-11 bg-gray-200/40 rounded-md text-center sm:col-span-1 cursor-pointer hover:bg-gray-200 transition-all duration-100 active:bg-gray-300 ${className}`}
    >
      {children}
      <p className="font-semibold md:text-[0.9rem]">{text}</p>
    </div>
  );
};

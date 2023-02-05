import { FC } from "react";

type BoardProps = {
  children: JSX.Element[];
};

export const Board: FC<BoardProps> = ({ children }) => {
  return (
    <div className="h-full grid gap-1.5 grid-cols-[100px_100px_100px] grid-rows-[100px_100px_100px]">
      {children}
    </div>
  );
};

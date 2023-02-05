import { FC } from "react";
import { TileState } from "../models/TileState";

type TileProps = {
  tileState: TileState;
  onClick: () => void;
};

const getTileTextFromTileState = (tileState: TileState): string => {
  switch (tileState) {
    case "O":
      return "O";
    case "X":
      return "X";
    case "Empty":
    default:
      return "";
  }
};

export const Tile: FC<TileProps> = ({ tileState, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex items-center justify-center text-white text-6xl select-none cursor-pointer bg-green-600 hover:bg-green-500 rounded-md"
    >
      {getTileTextFromTileState(tileState)}
    </div>
  );
};

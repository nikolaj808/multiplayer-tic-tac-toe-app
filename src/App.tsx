import { useState } from "react";
import { Board } from "./components/Board";
import { Tile } from "./components/Tile";
import { NextTileOption, TileState } from "./models/TileState";

const initialNextTile: NextTileOption = "X";

const initialTileStates: TileState[] = [
  "Empty",
  "Empty",
  "Empty",
  "Empty",
  "Empty",
  "Empty",
  "Empty",
  "Empty",
  "Empty",
];

export const App = () => {
  const [nextTile, setNextTile] = useState<NextTileOption>(initialNextTile);
  const [tileStates, setTileStates] = useState<TileState[]>(initialTileStates);

  return (
    <div className="h-screen grid place-content-center">
      <Board>
        {tileStates.map((tileState, index) => (
          <Tile
            tileState={tileState}
            onClick={() => {
              setTileStates((prev) =>
                prev.map((x, i) => (i === index ? nextTile : x))
              );
              setNextTile((prev) => (prev === "X" ? "O" : "X"));
            }}
          />
        ))}
      </Board>
    </div>
  );
};

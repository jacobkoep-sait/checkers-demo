import type { Board, BoardSquare, Piece } from "./types";

// 8 lines of 8 chars each:
// r/R = red man/king, b/B = black man/king, . = empty
export const BOARD_START = `
.b.b.b.b
b.b.b.b.
.b.b.B.b
........
........
r.R.r.r.
.r.r.r.r
r.r.r.r.
`.trim();

function charToCell(ch: string): BoardSquare {
  const map: Record<string, Piece> = {
    r: { player: "red", type: "man" },
    R: { player: "red", type: "king" },
    b: { player: "black", type: "man" },
    B: { player: "black", type: "king" },
  };

  return map[ch] ?? null;
}

export function parseBoard(text: string): Board {
  const lines = text
    .trim()
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.length > 0);

  const board: Board = lines.map((line) =>
    line.split("").map((ch) => charToCell(ch)),
  );

  // make sure the board has values (we could check for 8x8 here but for now we'll keep it flexible)
  if (board.length === 0) throw new Error("board text had no rows");
  return board;
}

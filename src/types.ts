export type Player = "red" | "black";
export type PieceType = "man" | "king";

export interface Coord {
  row: number;
  col: number;
}

export interface Piece {
  player: Player;
  type: PieceType;
}

export type BoardSquare = Piece | null;
export type Board = BoardSquare[][];

export interface Move {
  from: Coord;
  to: Coord;
}

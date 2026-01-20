// src/ui/BoardView.tsx
import { Pressable, StyleSheet, View } from "react-native";
import PieceView from "./PieceView";
import type { Board, Coord } from "./types";

type Props = {
  board: Board;
};

export function BoardView({ board }: Props) {
  return (
    <View style={styles.board}>
      {board.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((cell, colIndex) => {
            const coord: Coord = { row: rowIndex, col: colIndex };
            const isDark = (rowIndex + colIndex) % 2 === 1;

            return (
              <Pressable
                key={colIndex}
                style={[styles.square, isDark ? styles.dark : styles.light]}
                onPress={() =>
                  console.log(`pressed square at ${coord.row}, ${coord.col}`)
                }
              >
                <PieceView piece={cell} />
              </Pressable>
            );
          })}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  board: {
    width: 320,
    height: 320,
    borderWidth: 2,
    borderRadius: 8,
    overflow: "hidden",
  },
  row: { flex: 1, flexDirection: "row" },
  square: { flex: 1, alignItems: "center", justifyContent: "center" },
  light: { backgroundColor: "#eee" },
  dark: { backgroundColor: "#777" },
  piece: { fontSize: 18 },
});

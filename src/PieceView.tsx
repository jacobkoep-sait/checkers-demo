import { StyleSheet, Text, View } from "react-native";
import type { Piece } from "./types";

// Note: we could use the BoardSquare type here since it is Piece | null, however since this component
// is specifically for rendering pieces and not entire squares, using Piece | null makes the intent clearer.
type Props = {
  piece: Piece | null;
};

export default function PieceView({ piece }: Props) {
  if (piece === null) {
    return null;
  }

  const base = piece.player === "red" ? "🔴" : "⚫";

  return (
    <View style={styles.container}>
      <Text style={styles.base}>{base}</Text>

      {piece.type === "king" && <Text style={styles.crown}>👑</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  base: {
    fontSize: 22,
  },
  crown: {
    position: "absolute",
    top: 4,
    fontSize: 14,
  },
});

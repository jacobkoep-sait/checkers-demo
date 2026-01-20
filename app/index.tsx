import { StyleSheet, Text, View } from "react-native";
import { BOARD_START, parseBoard } from "../src/boards";
import { BoardView } from "../src/BoardView";
import type { Player } from "../src/types";

const activePlayer: Player = "red";

export default function App() {
  const board = parseBoard(BOARD_START);

  // Note: A better practice here would be to use SafeAreaView instead of a normal View with padding at the top
  // We'll update that in a future iteration
  return (
    <View style={styles.container}>
      <Text style={styles.title}>checkers demo</Text>
      <Text style={styles.subtitle}>active player: {activePlayer}</Text>

      <BoardView board={board} />

      <Text style={styles.hint}>
        tap any piece to print possible moves in the console
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 70, alignItems: "center", gap: 12 },
  title: { fontSize: 28, fontWeight: "700" },
  subtitle: { fontSize: 16, opacity: 0.8 },
  hint: { marginTop: 10, fontSize: 14, opacity: 0.7 },
});

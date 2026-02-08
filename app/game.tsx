import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BOARD_START, parseBoard } from "../src/boards";
import { BoardView } from "../src/BoardView";
import type { Player } from "../src/types";

const activePlayer: Player = "red";

export default function App() {
  const board = parseBoard(BOARD_START);
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Pressable
        onPress={() => {
          router.back();
        }}
        style={{ marginLeft: 12, marginTop: 12 }}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </Pressable>
      <View style={styles.container}>
        <Text style={styles.title}>checkers demo</Text>
        <Text style={styles.subtitle}>active player: {activePlayer}</Text>

        <BoardView board={board} />

        <Text style={styles.hint}>
          tap any piece to print possible moves in the console
        </Text>
        <Pressable onPress={() => router.navigate("/game-over")}>
          <View style={{ borderWidth: 1, borderRadius: 12, padding: 12 }}>
            <Text>Go to game over</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 70, alignItems: "center", gap: 12 },
  title: { fontSize: 28, fontWeight: "700" },
  subtitle: { fontSize: 16, opacity: 0.8 },
  hint: { marginTop: 10, fontSize: 14, opacity: 0.7 },
});

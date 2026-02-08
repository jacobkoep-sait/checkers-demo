import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoCircle}>
          <Ionicons name="grid" size={20} color="#111" />
        </View>

        <View style={styles.headerText}>
          <Text style={styles.appName}>303 Checkers</Text>
        </View>
      </View>

      <View style={styles.center}>
        <View style={styles.preview}>
          <View style={styles.previewRow}>
            <View style={[styles.previewTile, styles.dark]} />
            <View style={[styles.previewTile, styles.light]} />
            <View style={[styles.previewTile, styles.dark]} />
            <View style={[styles.previewTile, styles.light]} />
          </View>
          <View style={styles.previewRow}>
            <View style={[styles.previewTile, styles.light]} />
            <View style={[styles.previewTile, styles.dark]} />
            <View style={[styles.previewTile, styles.light]} />
            <View style={[styles.previewTile, styles.dark]} />
          </View>
          <View style={styles.previewRow}>
            <View style={[styles.previewTile, styles.dark]} />
            <View style={[styles.previewTile, styles.light]} />
            <View style={[styles.previewTile, styles.dark]} />
            <View style={[styles.previewTile, styles.light]} />
          </View>

          <View style={styles.previewPiecesRow}>
            <View style={[styles.piece, styles.redPiece]} />
            <View style={[styles.piece, styles.redPiece]} />
            <View style={[styles.piece, styles.blackPiece]} />
            <View style={[styles.piece, styles.blackPiece]} />
          </View>
        </View>
      </View>

      <View style={styles.actions}>
        <Pressable
          onPress={() => {
            router.navigate("/game");
          }}
          style={({ pressed }) => [
            styles.primaryButton,
            pressed && styles.pressed,
          ]}
        >
          <Text style={styles.primaryButtonText}>Play</Text>
        </Pressable>

        <Pressable
          onPress={() => {}}
          style={({ pressed }) => [
            styles.secondaryButton,
            pressed && styles.pressed,
          ]}
        >
          <Text style={styles.secondaryButtonText}>Resume</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: 6,
    paddingBottom: 18,
  },

  header: { flexDirection: "row", alignItems: "center", gap: 12, marginTop: 6 },
  logoCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 1,
    borderColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  headerText: { gap: 1 },
  appName: { fontSize: 20, fontWeight: "800", color: "#111" },

  center: { flex: 1, justifyContent: "center", alignItems: "center" },

  preview: {
    width: 220,
    height: 260,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#e5e5e5",
    backgroundColor: "#fff",
    padding: 16,
    justifyContent: "center",
    gap: 10,
  },
  previewRow: { flexDirection: "row" },
  previewTile: { width: 28, height: 28, borderRadius: 6, margin: 3 },
  dark: { backgroundColor: "#222" },
  light: { backgroundColor: "#f1f1f1" },

  previewPiecesRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginTop: 6,
  },
  piece: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 1,
  },
  redPiece: { backgroundColor: "#d94848", borderColor: "#b63a3a" },
  blackPiece: { backgroundColor: "#111", borderColor: "#000" },

  actions: { gap: 10 },
  primaryButton: {
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: "center",
    backgroundColor: "#111",
  },
  primaryButtonText: { color: "#fff", fontSize: 16, fontWeight: "800" },

  secondaryButton: {
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
  },
  secondaryButtonText: { color: "#111", fontSize: 16, fontWeight: "700" },

  pressed: { opacity: 0.7 },
});

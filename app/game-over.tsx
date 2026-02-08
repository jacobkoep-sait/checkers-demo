import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function GameOver() {
  const winner: string = "red";
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Game Over</Text>
        <Text style={styles.result}>
          {winner === "draw" ? "draw" : `${winner} wins`}
        </Text>

        <View style={styles.divider} />

        <Pressable
          onPress={() => {
            router.back();
          }}
          style={({ pressed }) => [
            styles.primaryButton,
            pressed && styles.pressed,
          ]}
        >
          <Text style={styles.primaryButtonText}>Play Again</Text>
        </Pressable>

        <Pressable
          onPress={() => {
            router.dismissAll(); // better than router.navigate('/' as any) that was shown in class
            // dismissAll explicitly pops back to the first screen on the stack
          }}
          style={({ pressed }) => [
            styles.secondaryButton,
            pressed && styles.pressed,
          ]}
        >
          <Text style={styles.secondaryButtonText}>Back to Home</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 18, justifyContent: "center" },

  content: { gap: 14, alignItems: "center" },

  title: { fontSize: 22, fontWeight: "800", color: "#111" },
  result: { fontSize: 34, fontWeight: "900", color: "#111" },

  divider: {
    width: 80,
    height: 1,
    backgroundColor: "#e5e5e5",
    marginVertical: 8,
  },

  primaryButton: {
    width: "100%",
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: "center",
    backgroundColor: "#111",
  },
  primaryButtonText: { color: "#fff", fontSize: 16, fontWeight: "800" },

  secondaryButton: {
    width: "100%",
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

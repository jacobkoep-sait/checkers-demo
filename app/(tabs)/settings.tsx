import { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Settings() {
  // if you're looking at this before the week 6 lecture this won't make sense yet, it'll be explained in lecture
  const [highlightMoves, setHighlightMoves] = useState(true);
  const [showCoords, setShowCoords] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <View style={styles.section}>
        <View style={styles.row}>
          <View style={styles.rowLeft}>
            <Text style={styles.rowLabel}>highlight moves</Text>
            <Text style={styles.rowHint}>
              show valid moves when a piece is tapped
            </Text>
          </View>
          <Switch value={highlightMoves} onValueChange={setHighlightMoves} />
        </View>

        <View style={styles.row}>
          <View style={styles.rowLeft}>
            <Text style={styles.rowLabel}>show coordinates</Text>
            <Text style={styles.rowHint}>display a1-h8 style labels</Text>
          </View>
          <Switch value={showCoords} onValueChange={setShowCoords} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 10 },
  title: { fontSize: 28, fontWeight: "900", marginLeft: 2 },
  subtitle: { fontSize: 18, opacity: 0.7, lineHeight: 20, marginBottom: 6 },

  section: { gap: 10 },
  sectionTitle: { fontSize: 16, fontWeight: "900", opacity: 0.85 },

  row: {
    borderWidth: 1,
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  rowLeft: { flex: 1, gap: 4 },
  rowLabel: { fontSize: 15, fontWeight: "800" },
  rowHint: { fontSize: 12, opacity: 0.65, lineHeight: 16 },

  button: {
    borderWidth: 1,
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 12,
    alignItems: "center",
  },
  buttonText: { fontWeight: "800" },

  dangerButton: { backgroundColor: "#ffecec" },
  dangerText: {},

  pressed: { opacity: 0.6 },
});

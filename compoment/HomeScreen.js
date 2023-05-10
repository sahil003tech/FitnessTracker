import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Fitness Tracker App</Text>
      <View style={styles.progressContainer}>
        <Text style={styles.progressLabel}>Steps Taken</Text>
        <Text style={styles.progressValue}>4,000</Text>
      </View>
      <View style={styles.progressContainer}>
        <Text style={styles.progressLabel}>Calories Burned</Text>
        <Text style={styles.progressValue}>200</Text>
      </View>
      <View style={styles.progressContainer}>
        <Text style={styles.progressLabel}>Distance Covered</Text>
        <Text style={styles.progressValue}>2.5 km</Text>
      </View>
      <Button title="Set Goals" onPress={() => navigation.navigate("Goal")} />
      <Button
        title="Enter Activity Data"
        onPress={() => navigation.navigate("Activity")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 10,
  },
  progressLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },
  progressValue: {
    fontSize: 16,
  },
});

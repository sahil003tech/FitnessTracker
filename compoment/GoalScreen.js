import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const GoalScreen = ({ navigation }) => {
  const [goal, setGoal] = useState("");
  const [dailyTarget, setDailyTarget] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Set Your Fitness Goals</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Goal</Text>
        <TextInput
          style={styles.input}
          value={goal}
          onChangeText={setGoal}
          placeholder="Enter your fitness goal"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Daily Target</Text>
        <TextInput
          style={styles.input}
          value={dailyTarget}
          onChangeText={setDailyTarget}
          placeholder="Enter your daily target"
        />
      </View>
      <Button title="Save Goal" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    marginVertical: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: "black",
  },
});

export default GoalScreen;

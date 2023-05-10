import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

const ActivityTrackingScreen = () => {
  const [steps, setSteps] = useState(0);
  const [distance, setDistance] = useState(0);
  const [calories, setCalories] = useState(0);

  const handleSave = () => {
    // Save the activity data to the database or API
    console.log("Steps:", steps);
    console.log("Distance:", distance);
    console.log("Calories:", calories);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Activity Data</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Steps Taken</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={steps}
          onChangeText={(text) => setSteps(parseInt(text))}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Distance Covered (in km)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={distance}
          onChangeText={(text) => setDistance(parseInt(text))}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Calories Burned</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={calories}
          onChangeText={setCalories}
        />
      </View>
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  label: {
    flex: 1,
    fontSize: 16,
  },
  input: {
    flex: 2,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default ActivityTrackingScreen;

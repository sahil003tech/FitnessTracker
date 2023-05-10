import HomeScreen from "./compoment/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GoalScreen from "./compoment/GoalScreen";
import ActivityTrackingScreen from "./compoment/ActivityScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="Goal" component={GoalScreen}></Stack.Screen>
        <Stack.Screen
          name="Activity"
          component={ActivityTrackingScreen}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

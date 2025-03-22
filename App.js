import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import LoginScreen from "./src/pages/LoginScreen";
import LandingScreen from "./src/pages/LandingScreen";
import RegisterScreen from "./src/pages/RegisterScreen";
import HomeNavigator from "./src/pages/HomeNavigator";
import ProposalSubmission from "./src/pages/ProposalSubmission";
import ProgressTracking from "./src/pages/ProgressTracking";
import Repository from "./src/pages/Repository";



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeNavigator} />
        <Stack.Screen name="ProposalSubmission" component={ProposalSubmission} />
        <Stack.Screen name="ProgressTracking" component={ProgressTracking} />
        <Stack.Screen name="Repository" component={Repository} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

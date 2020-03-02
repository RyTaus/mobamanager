import { Ionicons } from "@expo/vector-icons";
import LoadingScreen from "./components/LoadingView/LoadingScreen";
import MatchesScreen from "./components/MatchesView/MatchesScreen";
import DetailedMatchView from "./components/MatchesView/DetailedMatchView";
import { NavigationContainer } from "@react-navigation/native";
import PlayerScreen from "./components/PlayerView/PlayerScreen";
import React from "react";
import SettingsScreen from "./components/SettingsView/SettingsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import { LOADING_GRADIENT_TOP } from "./components/shared/Styles";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const settingsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Settings" component={SettingsScreen} />
  </Stack.Navigator>
);

const playersStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Players" component={PlayerScreen} />
  </Stack.Navigator>
);

const matchesStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Matches" component={MatchesScreen} />
  </Stack.Navigator>
);

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabStyle: { flex: 1 },
      style: { flex: 1 },
      safeAreaInset: true,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName: string;

        switch (route.name) {
          case "Players":
            iconName = "ios-people";
            break;
          case "Settings":
            iconName = focused ? "ios-list-box" : "ios-list";
            break;
          case "Matches":
            iconName = "ios-flame";
            break;
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      }
    })}
    tabBarOptions={{
      activeTintColor: LOADING_GRADIENT_TOP,
      inactiveTintColor: "gray"
    }}
  >
    <Tab.Screen name="Matches" component={matchesStack} />
    <Tab.Screen name="Players" component={playersStack} />
    <Tab.Screen name="Settings" component={settingsStack} />
  </Tab.Navigator>
);

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Loading">
      <Stack.Screen
        name="Loading"
        component={LoadingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Main"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="DetailedMatchView" component={DetailedMatchView} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;

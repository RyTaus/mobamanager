import { Ionicons } from "@expo/vector-icons";
import LoadingScreen from "./components/LoadingView/LoadingScreen";
import { NavigationContainer } from "@react-navigation/native";
import PlayerScreen from "./components/PlayerView/PlayerScreen";
import React from "react";
import SettingsScreen from "./components/SettingsView/SettingsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

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
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      }
    })}
    tabBarOptions={{
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }}
  >
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
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;

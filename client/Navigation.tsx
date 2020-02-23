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

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabStyle: { flex: 1 },
      style: { flex: 1, drawUnderTabBar: false, drawUnderNavBar: false },
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
    <Tab.Screen name="Players" component={PlayerScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
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
      <Stack.Screen name="Main" component={TabNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;

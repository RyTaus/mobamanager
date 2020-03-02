import DetailedMatchView from "./components/MatchesView/DetailedMatchView";
import DetailedPlayerScreen from "./components/DetailedPlayerView/DetailedPlayerScreen";
import { Ionicons } from "@expo/vector-icons";
import { LOADING_GRADIENT_TOP } from "./components/shared/Styles";
import LeagueScreen from "./components/LeagueView/LeagueScreen";
import LoadingScreen from "./components/LoadingView/LoadingScreen";
import MatchesScreen from "./components/MatchesView/MatchesScreen";
import { NavigationContainer } from "@react-navigation/native";
import PlayerScreen from "./components/PlayerView/PlayerScreen";
import React from "react";
import SettingsScreen from "./components/SettingsView/SettingsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const SettingsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Settings" component={SettingsScreen} />
  </Stack.Navigator>
);

const LeagueStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Rankings" component={LeagueScreen} />
  </Stack.Navigator>
);

const PlayerStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Players" component={PlayerScreen} />
    <Stack.Screen
      name="PlayerView"
      component={DetailedPlayerScreen}
      options={{ title: "Player" }}
    />
  </Stack.Navigator>
);

const MatchesStack = () => (
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
          case "League":
            iconName = "ios-contract";
            break;
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      }
    })}
    tabBarOptions={{
      activeTintColor: "#007bff",
      inactiveTintColor: "gray"
    }}
  >
    <Tab.Screen name="Matches" component={MatchesStack} />
    <Tab.Screen name="Players" component={PlayerStack} />
    <Tab.Screen name="League" component={LeagueStack} />
    <Tab.Screen name="Settings" component={SettingsStack} />
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
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <Stack.Screen name="DetailedMatchView" component={DetailedMatchView} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;

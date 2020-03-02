import React from "react";
import { Button, Input } from "react-native-elements";
import { SafeAreaView, Text, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View>
        <Input placeholder="Username" />
        <Input placeholder="Password" secureTextEntry={true} />
        <Button title="Login" onPress={() => navigation.navigate("Main")} />
        <Button
          title="Sign Up"
          onPress={() => navigation.navigate("Sign Up")}
        />
      </View>
    </SafeAreaView>
  );
}

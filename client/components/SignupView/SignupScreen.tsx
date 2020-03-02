import React from "react";
import { Button, Input } from "react-native-elements";
import { SafeAreaView, Text, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function SignupScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View>
        <Input placeholder="Email" />
        <Input placeholder="Username" />
        <Input placeholder="Password" secureTextEntry={true} />
        <Button title="Sign Up" onPress={() => navigation.navigate("Login")} />
      </View>
    </SafeAreaView>
  );
}

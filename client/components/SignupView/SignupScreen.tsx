import React from "react";
import { Button, Input } from "react-native-elements";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function SignupScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View>
        <Input placeholder="Email" />
        <Input placeholder="Username" />
        <Input placeholder="Password" secureTextEntry={true} />
        <Input placeholder="Repeat Password" secureTextEntry={true} />
        <Button title="Sign Up" onPress={() => navigation.navigate("Login")} />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity>
            <Text>Subscribe to Newsletter</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

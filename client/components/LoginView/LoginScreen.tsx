import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Button, Input } from "react-native-elements";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View>
        <Input placeholder="Username" />
        <Input
          placeholder="Password"
          secureTextEntry={true}
          rightIcon={<Ionicons name="md-eye" />}
        />
        <Button title="Log In" onPress={() => navigation.navigate("Main")} />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity>
            <Text>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Sign Up")}>
            <Text>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

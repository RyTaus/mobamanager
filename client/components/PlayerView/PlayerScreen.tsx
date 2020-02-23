import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";

import { SearchBar } from "react-native-elements";

export default function PlayerScreen() {
  const [input, setInput] = useState("");
  return (
    <SafeAreaView>
      <SearchBar
        placeholder="Type here..."
        onChangeText={input => setInput(input)}
        value={input}
        lightTheme
      />
    </SafeAreaView>
  );
}

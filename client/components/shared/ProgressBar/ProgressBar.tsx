import * as Progress from "react-native-progress";

import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

interface Props {
  title: string;
  stat: number;
}

export default function ProgressBar({ title, stat }: Props) {
  return (
    <View style={{ margin: 10 }}>
      <Text>{title}</Text>
      <Progress.Bar
        animated
        progress={stat}
        width={300}
        height={20}
        useNativeDriver
      />
    </View>
  );
}

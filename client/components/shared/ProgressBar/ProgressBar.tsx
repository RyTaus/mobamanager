import * as Progress from "react-native-progress";

import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

interface Props {
  title: string;
  stat: number;
  color?: string;
}

export default function ProgressBar({ title, stat, color }: Props) {
  return (
    <View style={{ margin: 10 }}>
      <Text>
        {title} - {stat}
      </Text>
      <Progress.Bar
        animated
        color={color}
        progress={stat / 18}
        width={300}
        height={15}
        borderRadius={5}
        useNativeDriver
      />
    </View>
  );
}

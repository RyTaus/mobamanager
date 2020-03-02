import React, { ReactElement, useEffect, useState } from "react";
import { Text, View } from "react-native";

import styles from "./LeagueStat.styles";

export default function LeagueStat({ stats }) {
  const [textColor, setTextColor] = useState("");
  useEffect(() => {
    if (stats?.place === 1) {
      setTextColor("gold");
    } else if (stats.place === 2) {
      setTextColor("gray");
    } else if (stats.place === 3) {
      setTextColor("brown");
    }
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.statItem}>
        <Text style={{ fontSize: 21, paddingRight: 15, color: textColor }}>
          {stats.place === 1 && "🥇"}
          {stats.place === 2 && "🥈"}
          {stats.place === 3 && "🥉"}
          {stats.place > 3 && stats.place}
        </Text>
        <View>
          {/* <Text style={styles.subtitle}>{stats.team}</Text> */}
          <Text style={styles.title}>{stats.team}</Text>
        </View>
        <Text style={styles.wins}>{stats.wins}</Text>
        <Text style={styles.separator}>-</Text>
        <Text style={styles.losses}>{stats.losses}</Text>
      </View>
    </View>
  );
}

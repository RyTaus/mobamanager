import * as Progress from "react-native-progress";

import { Image, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import ProgressBar from "../shared/ProgressBar/ProgressBar";
import { styles } from "./DetailedPlayerScreen.styles";

export default function DetailedPlayerScreen() {
  const [leadership, setLeadership] = useState(0);
  useEffect(() => {
    setTimeout(() => setLeadership(0.3), 500);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          style={styles.image}
          source={{
            uri:
              "https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/8/87/Origen_xPeke.jpg/440px-Origen_xPeke.jpg?version=f581c0f83a796457cb46ff567c4bd0a1"
          }}
        />
        <Text style={styles.header}>xPeke</Text>
        <Text>xpooks@gmail.com</Text>
      </View>
      <View style={{ flex: 10 }}>
        <ProgressBar title="Leadership" stat={leadership} />
        <ProgressBar title="Mentality" stat={leadership} />
        <ProgressBar title="Aggressivness" stat={leadership} />
        <ProgressBar title="Leadership" stat={leadership} />
        <ProgressBar title="Leadership" stat={leadership} />
        <ProgressBar title="Leadership" stat={leadership} />
      </View>
    </View>
  );
}

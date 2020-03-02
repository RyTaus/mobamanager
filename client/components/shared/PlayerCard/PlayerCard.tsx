import { Image, Text, View } from "react-native";

import React from "react";
import { styles } from "./PlayerCard.styles";

interface CardProps {
  fullName: string;
  gamerTag: string;
  playerImgSrc: string;
  macroScore: number;
  microScore: number;
  mentalScore: number;
}

export default function PlayerCard({
  fullName,
  gamerTag,
  playerImgSrc,
  macroScore,
  microScore,
  mentalScore
}: CardProps) {
  return (
    <View style={styles.playerCard}>
      <View style={styles.header}>
        <Image
          style={styles.playerImage}
          source={{ uri: playerImgSrc }}
        ></Image>
        <View style={styles.names}>
          <Text style={styles.fullName}>{fullName}</Text>
          <Text style={styles.gamerTag}>"{gamerTag}"</Text>
        </View>
      </View>
      <View style={styles.statsOverview}>
        <Stat
          name="mental"
          data={mentalScore}
          imgSrc="https://lmuhacks.github.io/images/maddie.png"
        />
        <Stat
          name="micro"
          data={microScore}
          imgSrc="https://lmuhacks.github.io/images/maddie.png"
        />
        <Stat
          name="macro"
          data={macroScore}
          imgSrc="https://lmuhacks.github.io/images/maddie.png"
        />
      </View>
    </View>
  );
}

interface StatProps {
  imgSrc: string;
  name: string;
  data: number;
}

function Stat({ imgSrc, name, data }: StatProps) {
  return (
    <View style={[styles.stat, styles[name]]}>
      <Image style={styles.statIcon} source={{ uri: imgSrc }}></Image>
      <Text style={styles.statData}>{data}</Text>
    </View>
  );
}

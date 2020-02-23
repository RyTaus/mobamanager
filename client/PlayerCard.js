import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function PlayerCard(props) {
  return (
    <View style={styles.playerCard}>
      <View style={styles.header}>
        <Image
          style={styles.playerImage}
          source={{ uri: props.playerImgSrc }}
        ></Image>
        <View style={styles.names}>
          <Text style={styles.fullName}>{props.name}</Text>
          <Text style={styles.gamerTag}>"{props.gamerTag}"</Text>
        </View>
      </View>
      <View style={styles.statsOverview}>
        <Stat
          name="mental"
          data={props.mentalScore}
          imgSrc="https://lmuhacks.github.io/images/maddie.png"
        />
        <Stat
          name="micro"
          data={props.microScore}
          imgSrc="https://lmuhacks.github.io/images/maddie.png"
        />
        <Stat
          name="macro"
          data={props.macroScore}
          imgSrc="https://lmuhacks.github.io/images/maddie.png"
        />
      </View>
    </View>
  );
}

function Stat(props) {
  const imgSrc = props.imgSrc;
  return (
    <View style={[styles.stat, styles[props.name]]}>
      <Image style={styles.statIcon} source={{ uri: imgSrc }}></Image>
      <Text style={styles.statData}>{props.data}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  playerCard: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "black",
    height: 150,
    width: 350
  },
  header: {
    flexDirection: "row"
  },
  playerImage: {
    borderRadius: 4,
    height: 70,
    width: 70
  },
  names: {
    left: 10,
    top: 10
  },
  fullName: {
    fontSize: 20
  },
  gamerTag: {
    fontSize: 16
  },
  statsOverview: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  micro: {
    borderRadius: 1,
    borderRightWidth: 0.5,
    borderLeftWidth: 0.5,
    borderColor: "black"
  },
  stat: {
    width: 110,
    alignItems: "center"
  },
  statIcon: {
    height: 40,
    width: 40
  },
  statData: {
    fontSize: 20,
    textAlign: "center"
  }
});
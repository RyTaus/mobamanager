import { Image, Text, View, SafeAreaView, FlatList } from "react-native";
import { styles } from "./MatchesScreen.styles";

import React from "react";

const DATA = [
  {
    matchType: "Current",
    opposingTeamName: "Tomato",
    opposingTeamRating: 20,
    date: "02/22/2020",
    time: "5:00"
  },
  {
    matchType: "Upcoming",
    opposingTeamName: "Potato",
    opposingTeamRating: 15,
    date: "02/23/2020",
    time: "5:00"
  },
  {
    matchType: "Past",
    status: "Win",
    opposingTeamName: "Peach",
    date: "02/20/2020"
  },
  {
    matchType: "Past",
    status: "Loss",
    opposingTeamName: "Banana",
    date: "02/19/2020"
  },
  {
    matchType: "Past",
    status: "Loss",
    opposingTeamName: "Apple",
    date: "02/10/2020"
  }
];

export default function MatchesScreen() {
  return (
    <SafeAreaView>
      <View style={styles.matchesList}>
        <FlatList
          data={DATA}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: 10,
                width: "100%"
              }}
            />
          )}
          renderItem={({ item }) => {
            switch (item.matchType) {
              case "Current":
                return (
                  <View style={[styles.currentMatch, styles.matchCard]}>
                    <CurrentMatch
                      opposingTeamName={item.opposingTeamName}
                      opposingTeamRating={item.opposingTeamRating}
                      date={item.date}
                      time={item.time}
                    />
                  </View>
                );
              case "Upcoming":
                return (
                  <View style={[styles.upcomingMatch, styles.matchCard]}>
                    <UpcomingMatch
                      opposingTeamName={item.opposingTeamName}
                      opposingTeamRating={item.opposingTeamRating}
                      date={item.date}
                      time={item.time}
                    />
                  </View>
                );
              case "Past":
                return (
                  <View style={[styles.pastMatch, styles.matchCard]}>
                    <PastMatch
                      opposingTeamName={item.opposingTeamName}
                      status={item.status}
                      date={item.date}
                    />
                  </View>
                );
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
}

interface PastMatchProps {
  opposingTeamName: string;
  status: string;
  date: string;
}

interface UpcomingOrCurrentMatchProps {
  opposingTeamName: string;
  opposingTeamRating: number;
  date: string;
  time: string;
}

function UpcomingMatch({
  opposingTeamName,
  opposingTeamRating,
  date,
  time
}: UpcomingOrCurrentMatchProps) {
  return (
    <View>
      <Text style={styles.matchTitle}>UPCOMING</Text>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.time}>{time}</Text>
      <Versus
        opposingTeamName={opposingTeamName}
        opposingTeamRating={opposingTeamRating}
      />
    </View>
  );
}

function PastMatch({ opposingTeamName, status, date }: PastMatchProps) {
  return (
    <View style={styles.pastMatchTextContainer}>
      <View style={styles.gameInfoContainer}>
        <Text style={styles.pastMatchTitle}>{status.toUpperCase()}</Text>
        <Text style={styles.versusPast}>vs. Team {opposingTeamName}</Text>
      </View>
      <Text style={styles.pastDate}>{date}</Text>
    </View>
  );
}

function CurrentMatch({
  opposingTeamName,
  opposingTeamRating,
  date,
  time
}: UpcomingOrCurrentMatchProps) {
  return (
    <View>
      <Text style={styles.matchTitle}>CURRENT</Text>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.time}>{time}</Text>
      <Versus
        opposingTeamName={opposingTeamName}
        opposingTeamRating={opposingTeamRating}
      />
    </View>
  );
}

interface VersusProps {
  opposingTeamName: string;
  opposingTeamRating: number;
}

function Versus({ opposingTeamName, opposingTeamRating }: VersusProps) {
  return (
    <View style={styles.versusContainer}>
      <TeamView name="MYTEAM" rating={100} />
      <Text style={styles.versusText}>vs.</Text>
      <TeamView name={opposingTeamName} rating={opposingTeamRating} />
    </View>
  );
}

interface TeamProps {
  name: string;
  rating: number;
}

function TeamView({ name, rating }: TeamProps) {
  return (
    <View style={styles.teamView}>
      <Image
        style={styles.teamLogo}
        source={{ uri: "https://lmuhacks.github.io/images/maddie.png" }}
      ></Image>
      <Text>Team {name}</Text>
      <Text>Overall rating: {rating}</Text>
    </View>
  );
}

import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Data from "../Data/Movies.json";
import Icon from "react-native-vector-icons/FontAwesome5";
import Film from "../components/Film";

export default function Index() {
  useEffect(() => {
    console.log(Data);
  }, []);

  const renderItem = ({ item }) => {
    return <Film item={item} />;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Movies</Text>
        <Icon name="search" size={20} color="black"></Icon>
      </View>
      <View style={styles.body}>
        <View style={{paddingHorizontal:11}}>
          <Text style={styles.bodyTitle}>Films</Text>
        </View>
      </View>
      <FlatList
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={Data}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 40,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
  },
  body: {},
  bodyTitle: {
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 15,
  },
});

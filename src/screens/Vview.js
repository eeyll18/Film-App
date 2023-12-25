import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Data from "../Data/Movies.json";
import Icon from "react-native-vector-icons/FontAwesome5";
import StarRating from "react-native-star-rating";
import Modal from "react-native-modal";
import Video from "react-native-video";

export default function Vview(props) {
  const id = props.route.params.id;
  const item = Data.filter((item) => item.id == id)[0];
  const [isModalVisible, setModalVisible] = useState(false);

  const Cast = ({ cast }) => {
    return (
      <View style={styles.castContainer}>
        <Image style={styles.castImage} source={{ uri: item.image }} />
        <Text style={styles.castName}>{cast.name}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.controls}>
            <TouchableOpacity
              onPress={() => props.navigation.goBack()}
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <Icon name="chevron-left" size={20} color="white" />
              <Text
                style={{
                  color: "white",
                  fontSize: 15,
                  fontWeight: "700",
                  marginLeft: 5,
                }}
              >
                Back
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="share" size={20} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.overlay} />
          <Image
            source={{ uri: item.image }}
            resizeMode="cover"
            style={styles.headerImage}
          />
          <View style={styles.playButtonContainer}>
            <TouchableOpacity
              onPress={() => setModalVisible(!isModalVisible)}
              style={styles.playButton}
            >
              <Icon name="play" size={25} color="white"></Icon>
            </TouchableOpacity>
          </View>
          <View style={styles.informationImageContainer}>
            <Image
              style={styles.informationImage}
              source={{ uri: item.image }}
            />
          </View>
          <View style={styles.informationNameContainer}>
            <Text style={styles.informationName} source={{ uri: item.image }}>
              {item.name}
            </Text>
          </View>
        </View>
        <View style={styles.body}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ flex: 1 }} />
            <View style={styles.topRight}>
              <View style={styles.topRightItem}>
                <Icon name="street-view" size={20} />
                <Text style={styles.topRightItemText}>{item.director}</Text>
              </View>
              <View style={styles.topRightItem}>
                <Icon name="folder" size={20} />
                <Text style={styles.topRightItemText}>{item.category}</Text>
              </View>
              <View style={styles.topRightItem}>
                <Icon name="clock" size={20} />
                <Text style={styles.topRightItemText}>{item.time}</Text>
              </View>
              <View style={styles.topRightItem}>
                <StarRating
                  disabled={false}
                  maxStars={5}
                  rating={item.star}
                  selectedStar={(rating) => console.log(rating)}
                  starSize={25}
                  fullStarColor="black"
                />
              </View>
            </View>
          </View>
          <View style={styles.content}>
            <Text style={styles.contentText}>
              {item.title}
              {item.title}
            </Text>
            <View style={styles.casts}>
              {item.cast.map((item) => (
                <Cast cast={item} />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalBody}>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.modalCloseButton}
            >
              <Icon name="times-circle" size={30} color="white" />
            </TouchableOpacity>
            
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {},
  headerImage: {
    width: "100",
    height: 400,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 9,
    width: "100%",
    height: "100%",
  },
  playButtonContainer: {
    position: "absolute",
    zIndex: 10,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  playButton: {
    width: 60,
    height: 60,
    backgroundColor: "#000000",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  controls: {
    position: "absolute",
    zIndex: 11,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    top: 10,
    paddingHorizontal: 20,
  },

  informationImage: {
    width: 120,
    height: 180,
    borderRadius: 10,
  },
  informationImageContainer: {
    position: "absolute",
    zIndex: 11,
    bottom: -100,
    left: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  informationNameContainer: {
    position: "absolute",
    zIndex: 11,
    bottom: 20,
    right: 10,
    width: 230,
  },
  informationName: {
    fontSize: 18,
    fontWeight: "700",
    color: "white",
  },
  body: {
    flex: 1,
    // backgroundColor:'blue',
    // padding: 10,
  },
  topRight: {
    // flexDirection: "row",
    flex: 1.5,
    // backgroundColor: "red",
    marginHorizontal: 5,
    paddingVertical: 20,
  },
  topRightItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  topRightItemText: {
    left: 10,
    textAlign: "center",
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  contentText: {
    fontSize: 18,
    color: "black",
  },
  casts: {
    marginLeft: -9,
    marginTop: 20,
    flexDirection: "row",
  },
  castContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  castImage: {
    width: 100,
    height: 150,
    borderRadius: 5,
  },
  castName: {
    fontSize: 12,
    marginTop: 9,
    fontWeight: "500",
    textAlign: "center",
  },
  modalBody: {
    backgroundColor: "white",
    height: 300,
    width: "100%",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalCloseButton: {
    position: "absolute",
    right: -9,
    top: -20,
    zIndex: 99999,
    width: 40,
    height: 40,
    backgroundColor: "black",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    height: 300,
    width: "100%",
  },
});

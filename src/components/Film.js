import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";


export default function Film({ item }) {
  const history = useNavigation()
  return (
    <TouchableOpacity onPress={()=>history.navigate('vview',{id:item.id})} style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.categoryContainer}>
          <Text style={styles.category}>{item.category}</Text>
        </View>
        <View style={styles.starContainer}>
          <Text style={styles.star}>{item.star}</Text>
        </View>
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.title}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 5,
    alignItems: "center",
  },
  imageContainer:{
    elevation:7,
    width:'100%',
    height:200
  },
  image: {
    width: "100%",
    height: 200,
    // s
  },
  detailContainer: {
    marginTop: 5,
  },
  title: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "500",
  },
  categoryContainer:{
    position:'absolute',
    zIndex:99999,
    backgroundColor:'black',
    paddingVertical:5,
    paddingHorizontal:10,
    left:0,
    top:0,
    borderRadius:10
  },
  category: {
    fontSize: 12,
    textAlign: "center",
    color:"white",
    fontWeight:"700"
  },
  starContainer:{
    position:'absolute',
    right:0,
    top:0,
    zIndex:99999,
    backgroundColor:"black",
    width:30,
    height:30,
    borderRadius:100,
    justifyContent:"center",
    alignItems:"center"

  },
  star:{
    fontSize:14,
    color:'white',
    fontWeight:'700',
    textAlign:"center"
  }
});

import React from "react";
import { StyleSheet, Text, View,Image } from "react-native";
import { globalStyles, images } from "../styles/global";
import Card from '../shared/card';

const reviewDetails = ({ route, navigation }) => {
  const { body, title, rating } = route.params;


  return ( 
    <View style={globalStyles.container}>
        <Card>
      <Text style={styles.container} >{title}</Text>
      <Text>{body}</Text>
      <Text>Rating:</Text>
      <Image source={images.ratings[rating]}/>
      </Card>

    </View>
  );
};

export default reviewDetails;

const styles = StyleSheet.create({
  container: {
    fontSize: 18,
    paddingBottom:5,
  },

});

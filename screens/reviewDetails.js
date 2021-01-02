import React from "react";
import { StyleSheet, Text, View,Image,Button } from "react-native";
import { globalStyles, images } from "../styles/global";
import Card from '../shared/card';

const reviewDetails = ({ route, navigation}) => {
  const { body, title, date,key } = route.params;

  
  return ( 
    <View style={globalStyles.container}>
        <Card>
      <Text style={styles.container} >{title}</Text>
      <Text style={styles.body}>{body}</Text>

      
      </Card>
     <Text  style={styles.date} >Datum: {date}</Text>

    </View>
  );
};

export default reviewDetails;

const styles = StyleSheet.create({
  container: {
    fontSize: 18,
    paddingBottom:5,
  },
  body:{
    marginTop:15
  },
    
  date:{
    alignSelf:"center"
  }
  

});

import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  Button,
} from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from "./reviewForm";
import MMKVStorage from "react-native-mmkv-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = ({ navigation }) => {
  const [state, setstate] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    console.log("fromDB");
    fromDB();
  }, [addReview]);

  useEffect(() => {
    console.log("saveDB");
    saveDB(reviews);
  }, [reviews]);

  const fromDB = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@key");
      setReviews(JSON.parse(jsonValue));
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };
  const delDB = async (key) => {
    try {
      const newRev = reviews.filter((item) => item.key !== key);
      const jsonValue = JSON.stringify(newRev);

      console.log(reviews);
      await AsyncStorage.setItem("@key", jsonValue);
      fromDB();
    } catch (e) {
      // saving error
    }
  };

  const saveDB = async (reviews) => {
    try {
      const jsonValue = JSON.stringify(reviews);
      // console.log(jsonValue)
      await AsyncStorage.setItem("@key", jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const addReview = (review) => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = today.getFullYear();
    today = dd + "/" + mm + "/" + yyyy;

    review.key = Math.random().toString();

    review.date = today;

    setReviews((currentReviews) => {
      return [review, ...currentReviews];
    });

    setstate(false);
  };

  return (
    <View style={globalStyles.container}>
      <Modal visible={state}>
        <View style={globalStyles.modal}>
          <ReviewForm addReview={addReview} />
          <MaterialIcons
            style={globalStyles.modelToggle}
            name="close"
            size={35}
            onPress={() => setstate(!state)}
          />
        </View>
      </Modal>
      <MaterialIcons
        style={globalStyles.modelToggleAdd}
        name="add"
        size={28}
        onPress={() => setstate(!state)}
      />

      <FlatList
        style={globalStyles.containerAll}
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <View style={globalStyles.card}>
              <View style={globalStyles.cardContent}>
                <Text style={globalStyles.titleText}>{item.title}</Text>
                <MaterialIcons
                  style={globalStyles.modelToggleremove}
                  name="remove"
                  size={15}
                  onPress={() => delDB(item.key)}
                />
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;

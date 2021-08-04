import { StackScreenProps } from "@react-navigation/stack";
import React, { useEffect } from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  Dimensions,
  ListRenderItemInfo,
} from "react-native";
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { RootStackParams } from "../routes/StackNavigation";

import Icon from "react-native-vector-icons/Ionicons";
import { convertHttp } from "../helper/convertHttp";
import { CharactersItem } from "../models/Comics";

const screenHeight = Dimensions.get("screen").height;

interface Props
  extends StackScreenProps<RootStackParams, "DetailComicScreen"> {}

export const DetailComicScreen = ({ navigation, route }: Props) => {
  const { title, description, thumbnail, characters } = route.params;
  const { available, items } = characters;
  const photo = convertHttp(thumbnail);

  return (
    <ScrollView style={{ backgroundColor: "#3F3E3E" }}>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image source={{ uri: photo }} style={styles.posterImage} />
        </View>
      </View>

      <View style={styles.marginContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>
          {" "}
          {description || "¡No hay decripcion para este comic!"}
        </Text>
      </View>

      <View style={styles.backButton}>
        <TouchableOpacity onPress={navigation.pop}>
          <Icon color="#FC9C04" name="arrow-back-outline" size={32} />
        </TouchableOpacity>
      </View>
      <View
        style={[
          {
            marginVertical: 8,
            flexDirection: "row",
            justifyContent: "space-between",
          },
          styles.listContainer,
        ]}
      >
        <Text style={styles.title}>Personajes</Text>
        <Text style={{ color: "green", fontWeight: "bold" }}>
          ¡Disponibles {available}!
        </Text>
      </View>
      {items.length > 0 ? (
        <FlatList
          data={items}
          style={styles.listContainer}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item: any, index: number) => index.toString()}
          renderItem={({ item, index }: ListRenderItemInfo<CharactersItem>) => (
            <Text style={{ color: "white" }}>{`${(index + 1).toString()}. ${
              item.name
            }`}</Text>
          )}
        />
      ) : (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ color: "white" }}>¡No hay personajes!</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: screenHeight * 0.7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 9,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },

  imageBorder: {
    flex: 1,
    overflow: "hidden",
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  posterImage: {
    flex: 1,
  },
  listContainer: {
    marginHorizontal: 16,
  },
  marginContainer: {
    marginHorizontal: 16,
    marginTop: 16,
  },
  subTitle: {
    color: "white",
    fontSize: 16,
    opacity: 0.8,
    textAlign: "justify",
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  backButton: {
    position: "absolute",
    elevation: 9,
    top: 35,
    left: 8,
  },
});

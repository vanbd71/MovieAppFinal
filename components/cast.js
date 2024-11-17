import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function Cast({ cast }) {
  const navigation = useNavigation();
  let personName = "Keanu Reevs";
  let characterName = "John Wick";
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Cast</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        {cast &&
          cast.map((person, index) => (
            <TouchableOpacity
              key={index}
              style={styles.personContainer}
              onPress={() => navigation.navigate("Person", person)}
            >
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={require("../assets/images/castImage1.png")}
                />
              </View>
              <Text style={styles.characterName}>
                {person.characterName
                  ? person.characterName.length > 10
                    ? `${person.characterName.slice(0, 10)}...`
                    : person.characterName
                  : "Unknown"}
              </Text>
              <Text style={styles.personName}>
                {person.personName
                  ? person.personName.length > 10
                    ? `${person.personName.slice(0, 10)}...`
                    : person.personName
                  : "Unknown"}
              </Text>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  title: {
    color: "white",
    fontSize: 18,
    marginHorizontal: 16,
    marginBottom: 12,
  },
  scrollView: {
    paddingHorizontal: 15,
  },
  personContainer: {
    marginRight: 16,
    alignItems: "center",
  },
  imageContainer: {
    overflow: "hidden",
    borderRadius: 40, // Đường viền tròn
    height: 80, // Chiều cao của hình tròn
    width: 80, // Chiều rộng của hình tròn
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#525252", // Màu viền
  },
  image: {
    borderRadius: 16,
    height: 96,
    width: 80,
  },
  characterName: {
    color: "white",
    fontSize: 12,
    marginTop: 4,
  },
  personName: {
    color: "#A3A3A3", // Màu xám trung tính
    fontSize: 12,
    marginTop: 4,
  },
});

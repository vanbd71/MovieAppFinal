import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import MovieList from "../../components/movieList";

const { width, height } = Dimensions.get("window");

export default function PersonScreen() {
  const navigation = useNavigation();
  const [isFavourite, toggleFavourite] = useState(false);
  const [personMovies, setPersonMovies] = useState([1, 2, 3]);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      {/* Back button */}
      <SafeAreaView style={styles.safeArea}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="chevron-back" size={28} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
          <Ionicons
            name={isFavourite ? "heart" : "heart-outline"}
            size={35}
            color={isFavourite ? "#FF3B30" : "white"}
          />
        </TouchableOpacity>
      </SafeAreaView>

      {/* Person details */}
      <View style={styles.personDetailsContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images/castImage2.png")}
            style={{
              height: height * 0.43,
              width: width * 0.74,
            }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.personName}>Keanu Reeves</Text>
          <Text style={styles.personLocation}>London, United Kingdom</Text>
        </View>
      </View>

      <View style={styles.additionalInfoContainer}>
        <View style={styles.row}>
          <View style={styles.rowItem}>
            <Text style={styles.label}>Gender</Text>
            <Text style={styles.value}>Male</Text>
          </View>
          <View style={styles.rowItem}>
            <Text style={styles.label}>Birthday</Text>
            <Text style={styles.value}>1964-09-02</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.rowItem}>
            <Text style={styles.label}>Known for</Text>
            <Text style={styles.value}>Acting</Text>
          </View>
          <View style={styles.rowItem}>
            <Text style={styles.label}>Popularity</Text>
            <Text style={styles.value}>64.23</Text>
          </View>
        </View>
        <View style={styles.biographyContainer}>
          <Text style={styles.bioTitle}>Biography</Text>
          <Text style={styles.bioText}>
            Keanu Charles Reeves is a Canadian actor. Reeves is known for his
            roles in Bill...
          </Text>
        </View>

        {/* movie */}
        <MovieList title="Movies" data={personMovies} />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1f2937", // Neutral-900
  },
  safeArea: {
    zIndex: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 12,
  },
  backButton: {
    padding: 8,
    borderRadius: 50,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  personDetailsContainer: {
    flexDirection: "column", // Sắp xếp các phần tử theo chiều dọc
    alignItems: "center", // Căn giữa theo chiều ngang
    marginTop: 24,
  },
  imageContainer: {
    alignItems: "center",
    borderRadius: 999,
    overflow: "hidden",
    height: height * 0.35, // Kích thước hình ảnh phù hợp
    width: width * 0.7,
    borderWidth: 2,
    borderColor: "#374151", // Neutral-500
  },
  textContainer: {
    marginTop: 16, // Khoảng cách giữa hình ảnh và nội dung
    alignItems: "center", // Căn giữa nội dung
  },
  personName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  personLocation: {
    fontSize: 14,
    color: "#9ca3af", // Neutral-500
    textAlign: "center",
  },
  additionalInfoContainer: {
    marginHorizontal: 16,
    marginTop: 24,
  },
  row: {
    flexDirection: "row", // Sắp xếp các phần tử trong cùng một hàng
    justifyContent: "space-between",
    marginVertical: 12,
  },
  rowItem: {
    flex: 1, // Mỗi phần tử chiếm một phần không gian đều
    borderWidth: 2,
    borderColor: "#9ca3af", // Neutral-400
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    alignItems: "center",
    marginHorizontal: 3,
  },
  label: {
    color: "white",
    fontWeight: "600",
    fontSize: 14,
  },
  value: {
    color: "#e5e7eb", // Neutral-300
    fontSize: 12,
  },
  biographyContainer: {
    marginVertical: 24,
    paddingHorizontal: 8,
  },
  bioTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  bioText: {
    color: "#d1d5db", // Neutral-400
    fontSize: 14,
    lineHeight: 20,
  },
});

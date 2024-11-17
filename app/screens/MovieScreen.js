import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  Platform,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Cast from "../../components/cast";
import MovieList from "../../components/movieList";

const { width, height } = Dimensions.get("window");
const ios = Platform.OS === "ios";

export default function MovieScreen() {
  const { params: item } = useRoute();
  const [isFavourite, toggleFavourite] = useState(false);
  const navigation = useNavigation();
  const [cast, setCast] = useState([1, 2, 3, 4, 5]);
  const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4, 5]);
  let movieName = "Ant-Man and the Wasp: Quantumania";

  useEffect(() => {
    // Call the movie details API
  }, [item]);

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContent}
      style={styles.container}
    >
      {/* Back button and movie poster */}
      <View style={styles.posterContainer}>
        <SafeAreaView style={[styles.safeArea, ios && styles.iosMargin]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
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

        <View>
          <Image
            source={require("../../assets/images/moviePoster2.png")}
            style={styles.posterImage}
          />
          <LinearGradient
            colors={["transparent", "rgba(23,23,23,0.8)", "rgba(23,23,23,1)"]}
            style={styles.posterGradient}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
          />
        </View>
      </View>

      {/* Movie details */}
      <View style={styles.detailsContainer}>
        {/* Title */}
        <Text style={styles.movieTitle}>{movieName}</Text>

        {/* Status, release, runtime */}
        <Text style={styles.movieInfo}>Released • 2020 • 170 min</Text>

        {/* Genres */}
        <View style={styles.genreContainer}>
          <Text style={styles.genreText}>Action •</Text>
          <Text style={styles.genreText}>Thrill •</Text>
          <Text style={styles.genreText}>Comedy</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>
            Working primarily in the arena of nonfiction, Marker rejected
            conventional narrative techniques, instead staking out a deeply
            political terrain defined by the use of still images, atmospheric
            soundtracks, and literate commentary. In Description d’un Combat,
            Marker’s idiosyncratic style, combining location footage with
            archival material, builds a complex and personal portrayal. Israel’s
            demography is explored, from the kibbutzim to the Arab minorities,
            the orthodox Jews, and the tourists. The “battle” of the title does
            not refer to the tank-and-artillery variety, but to the inner
            struggle of Israeli citizens to adapt to a new view of themselves,
            in a new country.
          </Text>
        </View>
      </View>

      {/* Cast section */}
      <Cast cast={cast} />
      <MovieList title="Similar Movies" data={similarMovies} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1C",
  },
  scrollContent: {
    paddingBottom: 20,
  },
  posterContainer: {
    width: "100%",
  },
  safeArea: {
    position: "absolute",
    zIndex: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: Platform.OS === "android" ? 12 : 0,
  },
  iosMargin: {
    marginTop: 12,
  },
  posterImage: {
    width: width,
    height: height * 0.5,
  },
  posterGradient: {
    width: "100%",
    height: height * 0.4,
    position: "absolute",
    bottom: 0,
  },
  detailsContainer: {
    marginTop: -(height * 0.09),
    alignItems: "center",
  },
  movieTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  movieInfo: {
    color: "#B3B3B3",
    fontSize: 16,
    textAlign: "center",
    marginTop: 8,
  },
  genreContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 8,
  },
  genreText: {
    color: "#B3B3B3",
    fontSize: 16,
    fontWeight: "600",
    marginHorizontal: 4,
  },
  descriptionContainer: {
    marginHorizontal: 16, // Căn lề hai bên
    marginTop: 12, // Cách đều phía trên
    padding: 12, // Khoảng cách trong đoạn văn
    backgroundColor: "#2C2C2C", // Màu nền tối nổi bật
    borderRadius: 8, // Bo góc
  },
  descriptionText: {
    color: "#E0E0E0", // Màu chữ sáng
    fontSize: 14, // Cỡ chữ vừa phải
    lineHeight: 22, // Giãn dòng thoáng
    textAlign: "justify", // Căn chỉnh đều hai bên
    fontFamily: ios ? "Helvetica" : "Roboto", // Phông chữ đẹp tùy hệ điều hành
  },
});

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
import { fetchMovieDetails, image500 } from "../../api/moviedb";
import { fetchMovieCredits, fetchSimilarMovies } from "../../api/moviedb";

const { width, height } = Dimensions.get("window");
const ios = Platform.OS === "ios";

export default function MovieScreen() {
  const { params: item } = useRoute();
  const [isFavourite, toggleFavourite] = useState(false);
  const navigation = useNavigation();
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [movie, setMovie] = useState({});
  // let movieName = "Ant-Man and the Wasp: Quantumania";

  useEffect(() => {
    // Call the movie details API
    // console.log("item" + item.id);
    getMovieDetails(item.id);
    getMovieCredits(item.id);
    getSimilarMovies(item.id);
  }, [item]);

  const getMovieDetails = async (id) => {
    const data = await fetchMovieDetails(id);
    if (data) {
      setMovie(data);
    }
  };
  const getMovieCredits = async (id) => {
    const data = await fetchMovieCredits(id);
    if (data && data.cast) {
      setCast(data.cast);
    }
  };
  const getSimilarMovies = async (id) => {
    const data = await fetchSimilarMovies(id);
    if (data && data.results) {
      setSimilarMovies(data.results);
    }
  };

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
            source={{ uri: image500(movie?.poster_path) }}
            // source={require("../../assets/images/moviePoster2.png")}
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
        <Text style={styles.movieTitle}>{movie?.title}</Text>

        {/* Status, release, runtime */}
        {movie?.id ? (
          <Text style={styles.movieInfo}>
            {movie?.status} • {movie?.release_date?.split("-")[0]} •{" "}
            {movie?.runtime} min
          </Text>
        ) : null}

        {/* Genres */}
        <View style={styles.genreContainer}>
          {movie?.genres?.map((genre, index) => {
            let showDot = index + 1 != movie.genres.length;
            return (
              <Text key={index} style={styles.genreText}>
                {genre?.name} {showDot ? "•" : null}
              </Text>
            );
          })}
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>{movie?.overview}</Text>
        </View>
      </View>

      {/* Cast section */}
      <Cast navigation={navigation} cast={cast} />
      <MovieList
        title="Similar Movies"
        hideSeeAll={true}
        data={similarMovies}
      />
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

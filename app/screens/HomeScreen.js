import React, { useState } from "react";
import {
  View,
  Text,
  Platform,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import TrendingMovies from "../../components/trendingMovies";
import MovieList from "../../components/movieList";
import { useNavigation } from "@react-navigation/native";

const android = Platform.OS === "android";

export default function HomeScreen() {
  const [trending, setTrending] = useState([1, 2, 3]);
  const [upcoming, setUpcoming] = useState([1, 2, 3]);
  const [topRated, setTopRated] = useState([1, 2, 3]);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* SafeAreaView chỉ bao quanh phần header */}
      <SafeAreaView
        style={android ? styles.safeAreaAndroid : styles.safeAreaIOS}
      >
        <StatusBar barStyle="light-content" backgroundColor="#262626" />
        <View style={styles.header}>
          <Ionicons name="menu" size={30} color="white" />
          <Text style={styles.title}>
            <Text style={styles.titleFirstLetter}>M</Text>ovies
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Search")}>
            <Ionicons name="search" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      {/* Phần nội dung chính */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        {/* Hiển thị các bộ phim */}
        <TrendingMovies data={trending} />
        <MovieList title="Upcoming" data={upcoming} />
        <MovieList title="Top Rated" data={topRated} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#262626",
  },
  safeAreaIOS: {
    backgroundColor: "#262626", // Không cần flex: 1 nữa
  },
  safeAreaAndroid: {
    backgroundColor: "#262626", // Không cần flex: 1 nữa
  },
  header: {
    marginTop: 12,
    flexDirection: "row", // Các phần tử sẽ được xếp theo hàng ngang
    justifyContent: "space-between", // Các phần tử được phân chia đều ở 2 bên
    alignItems: "center", // Các phần tử căn giữa theo chiều dọc
    marginHorizontal: 16, // margin bên trái và phải
    paddingVertical: 8, // Đảm bảo có khoảng cách trên và dưới
  },
  title: {
    color: "white",
    fontSize: 24, // text-3xl
    fontWeight: "bold", // font-bold
  },
  titleFirstLetter: {
    color: "white",
  },
});

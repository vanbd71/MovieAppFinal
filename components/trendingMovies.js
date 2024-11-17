import React from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Dimensions,
  Image,
  StyleSheet,
} from "react-native";
import Swiper from "react-native-swiper"; // Thêm Swiper
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

export default function TrendingMovies({ data }) {
  const navigation = useNavigation();

  const handleClick = (item) => {
    navigation.navigate("Movie", item);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trending</Text>
      <Swiper
        showsPagination={true} // Hiển thị dot pagination
        loop={true} // Quay vòng
        autoplay={true} // Tự động chuyển slide
        autoplayTimeout={3} // Thời gian chuyển tiếp giữa các slide (3 giây)
        style={styles.swiper}
      >
        {data.map((item, index) => (
          <MovieCard
            key={index}
            item={item}
            handleClick={() => handleClick(item)}
          />
        ))}
      </Swiper>
    </View>
  );
}

const MovieCard = ({ item, handleClick }) => {
  return (
    <TouchableWithoutFeedback onPress={handleClick}>
      <Image
        // source={item.image} // Sử dụng image từ data
        source={require("../assets/images/moviePoster1.png")}
        style={styles.movieImage}
      />
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
    marginTop: 0,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 16,
    marginBottom: 20,
  },
  movieImage: {
    width: width * 0.8, // Điều chỉnh kích thước ảnh
    height: height * 0.4, // Điều chỉnh chiều cao ảnh
    borderRadius: 12,
    alignSelf: "center", // Canh giữa ảnh
  },
  swiper: {
    width: width * 0.9, // Giới hạn chiều rộng của swiper
    height: height * 0.4, // Cố định chiều cao của swiper
    borderRadius: 12, // Làm tròn góc của swiper
  },
});

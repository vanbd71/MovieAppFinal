import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Dimensions,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { image500 } from "../api/moviedb";

const { width, height } = Dimensions.get("window");

export default function TrendingMovies({ data }) {
  const navigation = useNavigation();
  const flatListRef = useRef(null); // Tham chiếu tới FlatList
  const [currentIndex, setCurrentIndex] = useState(0); // Chỉ số cuộn hiện tại

  const handleClick = (item) => {
    navigation.navigate("Movie", item);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Tính chỉ số tiếp theo
      const nextIndex = (currentIndex + 1) % data.length;
      setCurrentIndex(nextIndex);

      // Cuộn tới chỉ số tiếp theo
      flatListRef.current?.scrollToIndex({
        index: nextIndex,
        animated: true,
      });
    }, 3000); // Cuộn mỗi 3 giây

    return () => clearInterval(interval); // Xóa interval khi component unmount
  }, [currentIndex, data.length]);

  const renderItem = ({ item }) => (
    <MovieCard item={item} handleClick={() => handleClick(item)} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trending</Text>
      <View style={{ marginHorizontal: 28, paddingHorizontal: 12 }}>
        <FlatList
          ref={flatListRef} // Gắn tham chiếu
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width * 0.8 + 16} // Snap vào từng ảnh
          decelerationRate="fast" // Cuộn mượt
          contentContainerStyle={{ paddingHorizontal: 16 }}
        />
      </View>
    </View>
  );
}

const MovieCard = ({ item, handleClick }) => {
  return (
    <TouchableWithoutFeedback onPress={handleClick}>
      <Image
        source={{ uri: image500(item.poster_path) }}
        style={styles.movieImage}
      />
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 16,
    marginBottom: 20,
  },
  movieImage: {
    width: width * 0.8,
    height: height * 0.4,
    borderRadius: 12,
    marginRight: 16,
  },
});

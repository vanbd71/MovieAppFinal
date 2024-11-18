import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Dimensions,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { image185 } from "../api/moviedb";

const { width, height } = Dimensions.get("window");

export default function MovieList({ title, data }) {
  // console.log(data);
  const navigation = useNavigation();

  // useEffect(() => {
  //   console.log("data", data[0]);
  // }, [data]);

  return (
    <View style={{ paddingHorizontal: 16, marginTop: 20 }}>
      {/* Header */}
      <View
        style={{
          marginBottom: 16,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {title}
        </Text>
        <TouchableOpacity>
          <Text style={{ color: "white", fontSize: 18 }}>See All</Text>
        </TouchableOpacity>
      </View>

      {/* Movie Row */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {data?.map((item, index) => (
          <TouchableWithoutFeedback
            key={index}
            onPress={() => navigation.navigate("Movie", item)}
          >
            <View style={{ marginRight: 16 }}>
              <Image
                source={{ uri: image185(item.poster_path) }}
                style={{
                  width: width * 0.33,
                  height: height * 0.22,
                  borderRadius: 8,
                }}
              />
              <Text
                style={{
                  color: "gray",
                  marginTop: 4,
                  marginLeft: 4,
                  fontSize: 14,
                }}
              >
                {item.title.length > 14
                  ? item.title.slice(0, 14) + "..."
                  : item.title}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    </View>
  );
}

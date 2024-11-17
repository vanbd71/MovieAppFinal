import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default function SearchScreen() {
  const navigation = useNavigation();
  const [results, setResults] = useState([]); // Mảng giả lập kết quả tìm kiếm
  let movieName = "Ant-Man and the Wasp: Quantumania";

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#1A202C" }}>
      {/* Thanh tìm kiếm */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 15,
          marginTop: 10,
          marginBottom: 10,
          borderWidth: 1,
          borderColor: "#4A5568",
          borderRadius: 25,
          paddingHorizontal: 10,
          paddingVertical: 5,
        }}
      >
        <TextInput
          placeholder="Search Movie"
          placeholderTextColor="lightgray"
          style={{
            flex: 1,
            fontSize: 16,
            color: "white",
          }}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={{
            backgroundColor: "#4A5568",
            borderRadius: 50,
            padding: 10,
          }}
        >
          <Ionicons name="search" size={20} color="white" />
        </TouchableOpacity>
      </View>
      {/* results  */}
      {results.length > 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 15 }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 16,
              marginBottom: 15,
            }}
          >
            Results ({results.length})
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {results.map((item, index) => {
              return (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={() => navigation.push("Movie", item)}
                >
                  <View style={{ marginBottom: 20, width: width * 0.44 }}>
                    <Image
                      source={require("../../assets/images/moviePoster1.png")} // Thay thế bằng ảnh động API
                      style={{
                        width: "100%",
                        height: height * 0.3,
                        borderRadius: 10,
                      }}
                    />
                    <Text
                      style={{
                        color: "#A0AEC0",
                        fontSize: 14,
                        marginTop: 8,
                        textAlign: "center",
                      }}
                    >
                      {movieName.length > 22
                        ? movieName.slice(0, 22) + "..."
                        : movieName}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            })}
          </View>
        </ScrollView>
      ) : (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../../assets/images/movieTime.png")} // Đường dẫn giữ nguyên
            style={{
              height: height - height * 0.6, // Tăng kích thước ảnh
              width: width - 40, // Tăng kích thước ảnh
              alignSelf: "center", // Căn giữa theo chiều ngang
              marginTop: height * 0.2, // Tạo khoảng cách từ trên để căn giữa với toàn bộ màn hình
            }}
          />
        </View>
      )}
    </SafeAreaView>
  );
}
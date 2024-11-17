// const { getDefaultConfig } = require("@expo/metro-config");

// const defaultConfig = getDefaultConfig(__dirname);
// // defaultConfig.resolver.sourceExts.push("cjs");

// // Thêm các phần mở rộng nếu cần
// defaultConfig.resolver.sourceExts.push("cjs");

// // Kiểm tra và điều chỉnh blockList nếu cần
// defaultConfig.resolver.assetExts = defaultConfig.resolver.assetExts.filter(
//   (ext) => ext !== "svg"
// ); // Nếu bạn sử dụng SVG

// module.exports = defaultConfig;
// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

module.exports = config;

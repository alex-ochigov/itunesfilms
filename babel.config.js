module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        alias: {
          '@features': './src/features',
          '@shared': './src/shared',
        },
      },
    ],
  ],
};

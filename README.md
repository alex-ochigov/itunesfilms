## iTunesFilms

This is version 0.0.1 of iTunesFilms, a React Native app that allows you to browse and search for films on iTunes.

### Installation

To install this app, first clone the repository using Git:

```
git clone https://github.com/alex-ochigov/itunesfilms.git
```

Then navigate into the project directory and install the dependencies using Node Package Manager (npm):

```
cd itunesfilms
npm install
```

### Usage

To start the app on an Android or iOS device, run one of the following scripts:

```
npm run android
npm run ios
```

You can also run the app on your local machine by using Expo. First install the Expo CLI:

```
npm install --global expo-cli
```

Then start the app:

```
expo start
```

This will open the Expo Developer Tools in your web browser. From there, you can launch the app on an emulator or a physical device.

### Dependencies

This app relies on the following dependencies:

- `@react-native-async-storage/async-storage: ^1.18.0`
- `@react-native-firebase/app: ^17.4.0`
- `@react-navigation/bottom-tabs: ^6.5.7`
- `@react-navigation/native: ^6.1.6`
- `@react-navigation/native-stack: ^6.9.12`
- `axios: ^1.3.4`
- `react: 18.2.0`
- `react-native: 0.71.4`
- `react-native-safe-area-context: ^4.5.0`
- `react-native-screens: ^3.20.0`
- `react-query: ^3.39.3`
- `styled-components: ^5.3.9`
- `zod: ^3.21.4`
- `zustand: ^4.3.6`

And the following dev dependencies:

- `@babel/core: ^7.20.0`
- `@babel/preset-env: ^7.20.0`
- `@babel/runtime: ^7.20.0`
- `@react-native-community/eslint-config: ^3.2.0`
- `@tsconfig/react-native: ^2.0.2`
- `@types/jest: ^29.2.1`
- `@types/react: ^18.0.24`
- `@types/react-test-renderer: ^18.0.0`
- `babel-jest: ^29.2.1`
- `eslint: ^8.19.0`
- `jest: ^29.2.1`
- `metro-react-native-babel-preset: 0.73.8`
- `prettier: ^2.4.1`
- `react-test-renderer: 18.2.0`
- `typescript: 4.8.4`

### Testing

Testing for this app is done using Jest. To run the test suite, use the following command:

```
npm run test
```

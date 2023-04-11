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
npx react-native-asset
cd ios && pod install
```

Apply reanimated patch for android https://gist.github.com/balmasich/e13ae0b12d3b4ab166a6143204b87dae

Create and configurate a new firebase project: https://console.firebase.google.com/u/0/
Copy coresponding files for ios and android.
### Usage

To start the app on an Android or iOS device, run one of the following scripts:

```
npm run android
npm run ios
```

### Testing

Testing for this app is done using Jest. To run the test suite, use the following command:

```
npm run test
```

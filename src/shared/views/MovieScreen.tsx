import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Platform,
  Share,
  Linking,
  AppState,
  AppStateStatus,
} from 'react-native';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import Text, {Body, Caption, Heading} from '@shared/components/Typography';
import Video from 'react-native-video';
import useHideBottomTabs from '@shared/hooks/useHideBottomTabs';
import {
  useSafeAreaInsets,
  type EdgeInsets,
} from 'react-native-safe-area-context';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {HomeStackParamList} from '../../features/home/types';
import {ITheme} from '@shared/theme/theme';
import {useTheme} from '@shared/theme/styled-components';
import {FavoriteStackParamList} from '@features/favorite/types';
import useFirebaseUser from '@shared/hooks/useFirebaseUser';
import {MovieType} from '@shared/types';

type MovieScreenType = NativeStackScreenProps<
  HomeStackParamList | FavoriteStackParamList,
  'Movie'
>;

const MovieScreen = ({route, navigation}: MovieScreenType) => {
  const [paused, setPaused] = useState(true);
  const [fullScreen, setFullScreen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [doc, setDoc] =
    useState<FirebaseFirestoreTypes.DocumentSnapshot<MovieType> | null>();

  const {item} = route.params;
  const uri = item.artworkUrl100.replace('100x100', '480x480');

  useHideBottomTabs();

  const insets = useSafeAreaInsets();
  const videoRef = useRef<Video | null>();
  const appState = useRef(AppState.currentState);
  const theme = useTheme();
  const styles = getStyles(insets, theme);
  const user = useFirebaseUser();

  useEffect(() => {
    if (!user) {
      return;
    }

    setLoading(true);

    const subscriber = firestore()
      .collection('Favorites')
      .where('userId', '==', user.uid)
      .where('trackId', '==', item.trackId)
      .onSnapshot((querySnapshot: FirebaseFirestoreTypes.DocumentData) => {
        if (querySnapshot.size) {
          setDoc(
            querySnapshot
              .docs[0] as FirebaseFirestoreTypes.DocumentSnapshot<MovieType>,
          );
        } else {
          setDoc(null);
        }
        setLoading(false);
      });

    return () => subscriber();
  }, [user, item]);

  useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      handleChangeAppState,
    );

    return () => {
      subscription.remove();
    };
  }, []);

  const handleChangeAppState = (nextAppState: AppStateStatus) => {
    if (nextAppState !== 'active') {
      setPaused(true);
    }

    appState.current = nextAppState;
  };

  const handleShare = async () => {
    try {
      await Share.share({message: item.trackViewUrl});
    } catch (e) {}
  };

  const handleViewUrl = async () => {
    try {
      await Linking.openURL(item.trackViewUrl);
    } catch (e) {}
  };

  const handleLike = async () => {
    setLoading(true);

    if (doc) {
      await firestore().collection('Favorites').doc(doc.id).delete();
    } else {
      await firestore()
        .collection('Favorites')
        .add({
          ...item,
          userId: user?.uid,
        });
    }

    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.preview}>
        <LinearGradient
          style={styles.topGradient}
          colors={['rgba(0, 0, 0, 0.4)', 'rgba(0, 0, 0, 0.001)']}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backButton}>
              <Ionicons name="arrow-back-outline" size={28} color="#fff" />
            </TouchableOpacity>
          </View>
        </LinearGradient>

        {Platform.OS === 'ios' && (
          <Image source={{uri}} style={styles.imagePreview} />
        )}

        {Platform.OS === 'ios' && (
          <View style={styles.playPauseWrapper}>
            <TouchableOpacity
              onPress={() => {
                videoRef.current?.seek(0);
                setPaused(false);
                setFullScreen(true);
              }}>
              <Ionicons name="play-outline" size={28} color="#fff" />
            </TouchableOpacity>
          </View>
        )}

        <Video
          ref={ref => (videoRef.current = ref)}
          source={{
            uri: item.previewUrl,
          }}
          paused={paused}
          repeat={false}
          fullscreen={fullScreen}
          poster={uri}
          resizeMode="cover"
          controls={Platform.OS === 'android'}
          onFullscreenPlayerWillDismiss={() => {
            setFullScreen(false);
            setPaused(true);
          }}
          style={styles.videoWrapper}
        />
      </View>
      <View style={styles.info}>
        <View style={styles.infoActions}>
          <TouchableOpacity onPress={handleShare}>
            <Ionicons name="share-social-outline" size={28} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLike} disabled={loading}>
            <Ionicons
              name={doc ? 'heart' : 'heart-outline'}
              size={28}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.about}>
          <Heading style={styles.title}>{item.trackName}</Heading>
          <Caption style={styles.genre}>{item.primaryGenreName}</Caption>
          <Body numberOfLines={10} ellipsizeMode="tail">
            {item.longDescription}
          </Body>
        </View>
        <LinearGradient
          style={styles.bottomGradient}
          colors={['rgba(0, 0, 0, 0.001)', 'rgba(0, 0, 0, 0.4)']}>
          <TouchableOpacity onPress={handleViewUrl} style={styles.viewButton}>
            <Text style={styles.viewButtonText}>View More</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};

const getStyles = (insets: EdgeInsets, {colors}: ITheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    preview: {
      position: 'relative',
      flex: 1,
    },
    topGradient: {
      position: 'absolute',
      paddingHorizontal: 16,
      minHeight: 120,
      top: 0,
      left: 0,
      right: 0,
      zIndex: 120,
    },
    header: {
      marginTop: Math.max(insets.top, 16),
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    backButton: {
      height: 40,
      width: 40,
      alignItems: 'center',
      justifyContent: 'center',
    },
    imagePreview: {
      position: 'relative',
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      zIndex: 110,
    },
    playPauseWrapper: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 111,
    },
    videoWrapper: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: Platform.OS === 'android' ? 100 : 1,
    },
    info: {
      position: 'relative',
      flex: 2,
      height: '100%',
    },
    infoActions: {
      paddingVertical: 12,
      paddingHorizontal: 16,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      columnGap: 16,
    },
    about: {
      paddingHorizontal: 16,
    },
    title: {
      marginBottom: 6,
    },
    genre: {
      marginBottom: 12,
    },
    bottomGradient: {
      position: 'absolute',
      paddingBottom: Math.max(insets.bottom, 16),
      minHeight: 100,
      justifyContent: 'flex-end',
      alignItems: 'center',
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 110,
    },
    viewButton: {
      width: 200,
      height: 45,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.primary,
      borderRadius: 100,
    },
    viewButtonText: {
      fontSize: 18,
      color: colors.background,
    },
  });

export default MovieScreen;

import React, {useState, useEffect, PropsWithChildren} from 'react';
import {
  View,
  StyleSheet,
  LayoutChangeEvent,
  LayoutRectangle,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

const Skeleton = ({children}: PropsWithChildren) => {
  const [layout, setLayout] = useState<LayoutRectangle>();
  const shared = useSharedValue(0);

  useEffect(() => {
    shared.value = withRepeat(withTiming(1, {duration: 1000}), Infinity);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: interpolate(
          shared.value,
          [0, 1],
          [layout ? -layout.width : 0, layout ? layout.width : 0],
        ),
      },
    ],
  }));

  if (!layout) {
    return (
      <View
        onLayout={(event: LayoutChangeEvent) =>
          setLayout(event.nativeEvent.layout)
        }>
        {children}
      </View>
    );
  }

  return (
    <MaskedView
      maskElement={<>{children}</>}
      style={{
        width: layout.width,
        height: layout.height,
      }}>
      <View style={styles.background} />
      <Animated.View style={[StyleSheet.absoluteFill, animatedStyle]}>
        <MaskedView
          style={StyleSheet.absoluteFill}
          maskElement={
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={StyleSheet.absoluteFill}
              colors={['transparent', 'black', 'transparent']}
            />
          }>
          <View style={[StyleSheet.absoluteFill, styles.highlight]} />
        </MaskedView>
      </Animated.View>
    </MaskedView>
  );
};

const styles = StyleSheet.create({
  background: {
    flexGrow: 1,
    overflow: 'hidden',
    backgroundColor: '#ddd',
  },
  highlight: {
    backgroundColor: '#eee',
  },
});

export default Skeleton;

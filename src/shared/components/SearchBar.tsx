import React, {useState, createRef, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput as RNTextInput,
} from 'react-native';
import Animated from 'react-native-reanimated';
import Ionicons from 'react-native-vector-icons/Ionicons';
import type {
  BaseAnimationBuilder,
  LayoutAnimationFunction,
} from 'react-native-reanimated';
import TextInput from './Input';

type SearchBarType = {
  value?: string;
  handleChange?: (text: string) => void;
  handleShowCancel?: () => void;
  handleSubmit?: () => void;
  handleClear?: () => void;
  editable: boolean;
  autoFocus?: boolean;
  layout?: BaseAnimationBuilder | LayoutAnimationFunction;
  sharedTransitionTag?: string;
};

const SearchBar = ({
  value,
  handleChange,
  handleShowCancel,
  handleSubmit,
  handleClear,
  editable,
  autoFocus = true,
  layout,
  sharedTransitionTag,
}: SearchBarType) => {
  const [keyboardFirstTimeOpened, setKeyboardFirstTimeOpened] = useState(false);

  const inputRef = createRef<RNTextInput>();

  useEffect(() => {
    if (!editable) {
      return;
    }

    // HACK: to prevent keyboard from being hidden in ios
    // can't use autoFocus={true} directly on input due to 'reanimated'
    if (!autoFocus) {
      return;
    }

    if (keyboardFirstTimeOpened) {
      return;
    }

    if (inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
        handleShowCancel && handleShowCancel();
        setKeyboardFirstTimeOpened(true);
      }, 500);
    }
  }, [
    editable,
    autoFocus,
    inputRef,
    handleShowCancel,
    keyboardFirstTimeOpened,
  ]);

  return (
    <Animated.View
      layout={layout}
      sharedTransitionTag={sharedTransitionTag}
      style={styles.container}>
      <View style={styles.searchIconWrapper}>
        <Ionicons name="search-outline" size={16} color="#d1d1d1" />
      </View>
      <Animated.View style={styles.inputWrapper}>
        <TextInput
          ref={inputRef}
          placeholder="Search your movie"
          placeholderTextColor="#d1d1d1"
          style={styles.input}
          returnKeyType="search"
          onSubmitEditing={handleSubmit}
          editable={editable}
          value={value}
          onChangeText={handleChange}
        />
      </Animated.View>
      {!!value?.length && (
        <TouchableOpacity style={styles.clearIconWrapper} onPress={handleClear}>
          <Ionicons name="close-outline" size={20} color="#d1d1d1" />
        </TouchableOpacity>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    padding: 6,
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
  },
  searchIconWrapper: {
    position: 'absolute',
    left: 8,
  },
  clearIconWrapper: {
    position: 'absolute',
    right: 8,
  },
  inputWrapper: {
    flex: 1,
    paddingLeft: 22,
  },
  input: {
    fontFamily: 'Lato',
    padding: 0,
  },
});

export default SearchBar;

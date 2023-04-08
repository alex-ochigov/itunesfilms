import React, {useState, type ReactNode} from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type TextInputType = 'text' | 'password';

type InputProps = {
  value: string;
  placeholder: string;
  type: TextInputType;
  icon: ReactNode;
  onChangeText: (text: string) => void;
};

const Input = ({value, placeholder, type, icon, onChangeText}: InputProps) => {
  const [secure, setSecure] = useState(() => type === 'password');
  return (
    <View style={styles.container}>
      <View style={[styles.inputIcon, styles.leadingIcon]}>{icon}</View>

      <TextInput
        secureTextEntry={type === 'password' && secure}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={[styles.input, type === 'password' ? styles.inputTail : null]}
        placeholderTextColor="#888"
      />
      <TouchableOpacity
        onPress={() => setSecure(prev => !prev)}
        style={[styles.inputIcon, styles.tailIcon]}>
        {type === 'password' && (
          <Ionicons
            name={secure ? 'eye-off-outline' : 'eye-outline'}
            size={24}
            color="#d1d1d1"
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    paddingHorizontal: 8,
    height: 45,
    borderRadius: 100,
    backgroundColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputIcon: {
    position: 'absolute',
    height: 45,
    width: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 0,
    paddingLeft: 36,
  },
  inputTail: {
    paddingHorizontal: 36,
  },
  leadingIcon: {
    left: 12,
  },
  tailIcon: {
    right: 12,
  },
});

export default Input;

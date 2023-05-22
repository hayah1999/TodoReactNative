import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Todos from './src/Todos';
import { styles } from './src/styles';

export default function App() {
  return (
    <SafeAreaView >
      <View  style={styles.container}>
      <Todos />

      </View>
    </SafeAreaView>
  );
}

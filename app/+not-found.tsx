import { View, StyleSheet } from "react-native";
import { Link, Stack } from 'expo-router';
import React from 'react';

export default function Index() {
  return (
    <View style={styles.container}>
       <Stack.Screen options={{ title: 'Oops! Not Found' }} />
      <Link href="/about" style={styles.button}>
        Go to About Screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff'
  }
});
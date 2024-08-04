import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Page2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Chegou</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', 
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000', 
  },
});

export default Page2;

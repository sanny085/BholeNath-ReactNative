import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      {/* 1 Heading for Flat Card */}
      <Text style={styles.headingText}>Flat Card</Text>

      {/* 2 Main Container */}
      {/* If there will be mutiple css, we need to use [] sign inside  {[]}  */}
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Hello 1</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Hello 2</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Hello 3</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
  },

  cardOne: {
    backgroundColor: '#EF5354',
  },
  cardTwo: {
    backgroundColor: '#50DBB4',
  },
  cardThree: {
    backgroundColor: '#5DA3FA',
  },
});

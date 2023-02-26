import {StyleSheet, ScrollView, Image, Text, View} from 'react-native';
import React from 'react';

export default function MainCard() {
  return (
    <View>
      {/* 1 Heading for Flat Card */}
      <Text style={styles.headingText}>Main Card</Text>

      {/* 2 Main Container */}
      {/* If there will be mutiple css, we need to use [] sign inside  {[]}  */}

      <ScrollView style={styles.container} horizontal={true}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Me</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Me</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text>To</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Find</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Here</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text> 😃 </Text>
        </View>
      </ScrollView>
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
    backgroundColor: '#CAD5E2',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#EF5354',
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
});

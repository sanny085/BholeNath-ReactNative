import {StyleSheet, Image, Text, View} from 'react-native';
import React from 'react';

const Banner = () => {
  return (
    <View>
      {/* 1 Heading for Flat Card */}
      <Text style={styles.headingText}>Bhole Shankar</Text>

      {/* If there will be mutiple css, we need to use [] sign inside  {[]}  */}
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://static.sadhguru.org/d/46272/1668511571-image-37.jpg',
          }}
          style={styles.cardImages}
          alt="React Icon"
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Adiyogi - The Source of Yoga</Text>
          <Text style={styles.cardLabel}>Coimbatore, Tamil Nadu 641114</Text>
          <Text style={styles.cardDiscription}>
            Adiyogi is here to liberate you from disease, discomfort, and
            poverty – above all, from the very process of life and death. -
            Sadhguru
          </Text>
          <Text style={styles.cardFooter}>12 mins away</Text>
        </View>
      </View>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 360,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: '#FFFFFF',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImages: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },

  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardLabel: {
    color: '#758283',
    fontSize: 14,
    marginBottom: 6,
  },
  cardDiscription: {
    color: '#242B2E',
    fontSize: 12,
    marginTop: 6,
    marginBottom: 12,
    flexShrink: 1,
  },
  cardFooter: {
    color: '#000000',
  },
});
